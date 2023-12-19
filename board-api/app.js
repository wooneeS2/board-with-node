const express = require('express');
const { ObjectId } = require('mongodb');
const handlebars = require('express-handlebars');
const mongodbConnection = require('./configs/mongodb-connection');
const postService = require('./services/post-service');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
    'handlebars',
    handlebars.create({
        helpers: require('./configs/handlebars-helpers'),
    }).engine
);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1; // 현재 페이지 데이터
    const search = req.query.search || ''; // 검색어 데이터
    try {
        // postService.list에서 글리스트와 페이지네이터를 가져옴
        const [posts, paginator] = await postService.list(
            collection,
            page,
            search
        );
        console.log(posts);

        // 리스트 페이지 렌더링
        res.render('home', {
            title: '테스트 게시판',
            search,
            paginator,
            posts,
        });
    } catch (error) {
        console.error(error);
        res.render('home', { title: '테스트 게시판' }); // 에러가 나는 경우는 빈값으로 렌더링
    }
});

app.get('/write', (req, res) => {
    res.render('write', { title: '테스트 게시판', mode: 'create' });
});

app.post('/write', async (req, res) => {
    const post = req.body;
    const result = await postService.writePost(collection, post); // 글쓰기 후 결과 반환
    res.redirect(`/detail/${result.insertedId}`); // 생성된 도큐먼트의 _id를 사용해 상세페이지로 이동
});

let collection;
app.listen(3008, async () => {
    console.log('Server started');
    const mongoClient = await mongodbConnection();
    collection = mongoClient.db().collection('post');
    console.log('MongoDB connected');
});

app.get('/detail/:id', async (req, res) => {
    const result = await postService.getDetailPost(collection, req.params.id);
    res.render('detail', {
        title: '테스트 게시판',
        post: result.value,
    });
});

app.post('/check-password', async (req, res) => {
    const { id, password } = req.body;

    const post = await postService.getPostByIdAndPassword(collection, {
        id,
        password,
    });
    if (!post) {
        return res.status(404).json({ isExist: false });
    } else {
        return res.json({ isExist: true });
    }
});

app.get('/modify/:id', async (req, res) => {
    const { id } = req.params.id;
    const post = await postService.getPostById(collection, req.params.id);
    console.log(post);
    res.render('write', { title: 'test board', mode: 'modify', post });
});

app.post('/modify/', async (req, res) => {
    const { id, title, writer, password, content } = req.body;

    const post = {
        title,
        writer,
        password,
        content,
        createdDt: new Date().toISOString(),
    };

    const result = postService.updatePost(collection, id, post);
    res.redirect(`/detail/${id}`);
});

app.delete('/delete', async (req, res) => {
    const { id, password } = req.body;
    try {
        const result = await collection.deleteOne({
            _id: ObjectId(id),
            password: password,
        });
        if (result.deletedCount !== 1) {
            console.log('fail delete');
            return res.json({ isSuccess: false });
        }

        return res.json({ isSuccess: true });
    } catch (error) {
        console.error(error);
        return res.json({ isSuccess: false });
    }
});

app.post('/write-comment', async (req, res) => {
    const { id, name, password, comment } = req.body;
    const post = await postService.getPostById(collection, id);
    if (post.comments) {
        post.comments.push({
            idx: post.comments.lenght + 1,
            name,
            password,
            comment,
            createDt: new Date().toISOString(),
        });
    } else {
        post.comments = [
            {
                idx: 1,
                name,
                password,
                comment,
                createdDt: new Date().toISOString(),
            },
        ];
    }
    postService.updatePost(collection, id, post);
    return res.redirect(`/detail/${id}`);
});

app.delete('/delete-comment', async (req, res) => {
    const { id, idx, password } = req.body;
    const post = await collection.findOne(
        {
            _id: ObjectId(id),
            //도큐먼트 안에 있는 리스트에서 조건에 해당하는 데이터가 있으면 도큐먼트 결과값으로 주는 연산자
            comments: { $elemMatch: { idx: parseInt(idx), password } },
        },
        postService.projectionOption
    );

    if (!post) {
        return res.json({ isSuccess: false });
    }
    post.comments = post.comments.filter(comment => comment.idx !== idx);
    postService.updatePost(collection, id, post);
    return res.json({ isSuccess: true });
});
