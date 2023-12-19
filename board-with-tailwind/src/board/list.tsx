import { useNavigate } from 'react-router-dom';

export const BoardList = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center font-bold text-4xl m-5 ">
                게시판 제목
            </div>
            <div className="flex flex-row m-1 ">
                <input
                    placeholder="검색어를 입력하세요."
                    type="search"
                    className=" block m-1 rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">
                    검색
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    글쓰기
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200 m-1">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            제목
                        </th>
                        <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            작성자
                        </th>
                        <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            조회수
                        </th>
                        <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            등록일
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className="px-6 py-4 whitespace-nowrap"
                            onClick={() => {
                                navigate('/detail/fdafda');
                            }}
                        >
                            The Sliding Mr. Bones (Next Stop, Pottersville)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Malcolm Lockyer
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">1961</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Witchy Woman
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            The Eagles
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">1972</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Shining Star
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Earth, Wind, and Fire
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">1975</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-center m-10">
                <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                >
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>

                    <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        1
                    </a>
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        2
                    </a>
                    <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                        3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                        ...
                    </span>
                    <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                        8
                    </a>
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        9
                    </a>
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        10
                    </a>
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </nav>
            </div>
        </>
    );
};
