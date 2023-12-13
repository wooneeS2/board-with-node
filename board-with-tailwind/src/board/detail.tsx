export const BoardDetail = () => {
    return (
        <div className="flex flex-col  w-1/2 text-center  m-auto">
            <div className=" font-bold text-4xl m-5 ">게시판 제목</div>
            <div className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-2 justify-center content-center w-full items-center">
                {/* 게시글 영역 */}
                <div className="w-full flex justify-center flex-col">
                    <div className="font-bold text-xl my-1 text-center">
                        게시글 제목
                    </div>
                    <div className="flex flex-row gap-1 justify-end  ">
                        <div className="flex flex-row  items-center gap-1">
                            <div className="">작성자</div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                수정/삭제
                            </button>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div>조회수</div>
                            <div>날짜</div>
                        </div>
                    </div>
                </div>
                <div className=" w-full  text-center m-h-full h-24 ">
                    게시글 내용
                </div>
                {/* 댓글 영역 */}
                <div className="w-full text-left">
                    총 N개의 댓글이 있습니다.
                </div>
                <div className="border-solid border-2 m-1 p-2 w-full rounded-lg">
                    <div className="flex flex-row gap-2 items-center justify-between ">
                        <div className="flex flex-row items-center gap-2">
                            <div>작성자</div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                삭제
                            </button>
                        </div>
                        <div>날짜</div>
                    </div>
                    <div className="h-auto m-h-full h-12">댓글 내용</div>
                </div>
                {/* 댓글 작성 영역 */}
                <div className="flex flex-col w-full gap-2">
                    <input
                        placeholder="닉네임"
                        className="rounded-lg p-1  border-solid border-2"
                    />
                    <input
                        placeholder="비밀번호"
                        type="password"
                        className="rounded-lg p-1  border-solid border-2"
                    />
                    <textarea
                        rows={4}
                        placeholder="댓글을 남겨주세요."
                        className="border-solid border-2 rounded-lg p-1"
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        작성
                    </button>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    목록으로
                </button>
            </div>
        </div>
    );
};
