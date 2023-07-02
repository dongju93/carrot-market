import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        // 화면 크기에 맞게 행열 변경
        // Mobile 화면(기본)에서는 행(row) 단위(grid)로 하위 3개 item을 표현하였으나,
        // 화면 크기가 커질때 열(column) 단위(grid-col)로 표현 변경
        <div className="bg-slate-500 px-10 py-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 min-h-screen lg:place-items-center">
            {/* dark : DarkMode 시 적용될 스타일 지정가능 */}
            <div className="bg-white dark:bg-gray-600 flex flex-col justify-between rounded-3xl shadow-2xl p-6">
                <span className="font-semibold text-3xl dark:text-gray-100">
                    Select Item
                </span>
                <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-white my-2">
                        Grey Chair
                    </span>
                    <span className="font-semibold dark:text-gray-100">
                        $19
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-white">
                        Grey Chair
                    </span>
                    <span className="font-semibold dark:text-gray-100">
                        $19
                    </span>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                    <span className="dark:text-white">Total</span>
                    <span className="font-semibold dark:text-gray-100">
                        $38
                    </span>
                </div>
                <div
                    className="mt-5 bg-blue-500 text-white p-3 w-1/2 mx-auto text-center rounded-xl hover:bg-teal-700 hover:text-black
                    // 기존의 hover modifier를 dark:hover 라는 중첩 modifier로 calcelling 시킴
                            dark:hover:bg-green-200 dark:hover:text-black active:bg-yellow-500 focus:text-red-500"
                >
                    Checkout
                </div>
            </div>
            <div className="bg-white overflow-hidden rounded-3xl shadow-2xl group">
                {/* portrait : 기기가 세로모드일때 적용될 요소(기본)
                landscape : 기기가 가로모드일때 적용될 요소 */}
                <div className="portrait:bg-indigo-500 landscape:bg-teal-800 p-6 pb-14">
                    <span className="text-white text-2xl">Profile</span>
                </div>
                <div className="rounded-3xl bg-white relative -top-5 p-6">
                    <div className="flex relative -top-16 items-end justify-between">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">
                                Orders
                            </span>
                            <span className="font-medium">340</span>
                        </div>
                        <div className="h-24 w-24 bg-red-300 rounded-full group-hover:bg-slate-600 transition-colors" />
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">Spent</span>
                            <span className="font-medium">$340</span>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center -mt-10 -mb-5">
                        <span className="text-lg font-medium">John Wick</span>
                        <span className="text-sm text-gray-500">America</span>
                    </div>
                </div>
            </div>
            {/* col-span : 상위요소에서 grid-col을 적용하면 사용할 수 있음,
            grid-cols를 2개 만큼의 크기를 차지하라는 스타일 */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:col-span-2 lg:col-span-1">
                <div className="flex mb-5 justify-between items-center">
                    <span>⬅️</span>
                    <div className="space-x-3">
                        <span>⭐️ 4.9</span>
                        <span className="shadow-xl p-2 rounded-md">💖</span>
                    </div>
                </div>
                <div className="bg-zinc-400 h-72 mb-5 dark:bg-teal-200" />
                <div className="flex flex-col">
                    <span className="font-medium text-xl">Swoon Lounge</span>
                    <span className="text-xs text-gray-500">Chair</span>
                    <div className="mt-3 mb-5 flex justify-between items-center">
                        <div className="space-x-2">
                            <button className="w-5 h-5 rounded-full bg-yellow-500 transition focus:ring-2 ring-offset-2 ring-yellow-500 ring-opacity-90" />
                            <button className="w-5 h-5 rounded-full bg-indigo-500 transition focus:ring-2 ring-offset-2 ring-indigo-500 ring-opacity-90" />
                            <button className="w-5 h-5 rounded-full bg-green-500 transition focus:ring-2 ring-offset-2 ring-green-500 ring-opacity-90" />
                        </div>
                        <div className="flex items-center space-x-5">
                            <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                                -
                            </button>
                            <span>1</span>
                            <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-2xl">$450</span>
                        <button className="bg-blue-500 text-center text-white rounded-lg py-2 px-8 text-xs">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
