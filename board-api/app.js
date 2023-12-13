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
