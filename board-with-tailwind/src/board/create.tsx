export const BoardCreate = () => {
    return (
        <>
            <div className="flex justify-center font-bold text-4xl m-5  ">
                게시판 제목
            </div>
            <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-2 justify-center content-center w-screen items-center">
                <input
                    placeholder="제목을 입력해주세요."
                    className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                />

                <input
                    className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="작성자 이름을 입력해주세요."
                />
                <input
                    className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="비밀번호를 입력해주세요."
                />
                <textarea
                    rows={10}
                    className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="게시글 내용을 입력해주세요."
                />
            </form>
        </>
    );
};
