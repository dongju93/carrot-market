import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    // 전체 그리드 생성
    <div className="dark bg-slate-500 dark:bg-slate-800 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      {/* select itmes box */}
      <div className="dark:bg-gray-400 bg-white flex flex-col justify-between p-6 rounded-3xl shadow-sm">
        {/* Just In Time compiler, 사용자가 원하는 [값] 설정 가능, TailwindCSS가 클래스를 생성해 줌 */}
        <span className="dark:text-white font-semibold text-[45px]">Select Item</span>
        {/* <ul>
          // array Map 별 classname 지정
          {[1,2,3,4,5].map((i)=>(
            <div key={i} className="flex justify-between my-2 odd:bg-blue-500 even:bg-yellow-400" >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a","b","c",""].map((c,i) =>
          <li key={i} className="bg-red-400 py-2 empty:hidden">
            {c}
          </li>)}
        </ul> */}
        <div className="flex justify-between">
          <span className="dark:text-white text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="dark:text-white text-yellow-500">Yellow Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span className="dark:text-white">Total</span>
          <span className="font-semibold">$38</span>
        </div>
        {/* Modifier */}
        <div className="flex">
          <button
            className="mt-5 dark:bg-[#555] bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto
            dark:hover:bg-black active:bg-yellow-500 focus:text-red-500">
              Checkout
          </button>
        </div>
      </div>
      {/* Profile box */}
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-[url('/vercel.svg')] bg-blue-500 portrait:bg-indigo-500 landscape:bg-teal-500 xl:pb-40 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative bg-white -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">5</span>
            </div>
            <div className="h-24 w-24 bg-lime-500 rounded-full group-hover:bg-red-500 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Lee Dongju</span>
            <span className="text-sm text-gray-500">South Korea</span>
          </div>
        </div>
      </div>
      {/* Like, Select round box */}
      <div className="bg-white p-10 rounded-2xl shadow-sm lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              {/* ring utility */}
              <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-90 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 bg-opacity-90 focus:ring-2 ring-offset-2 ring-indigo-500 transition"  />
              <button className="w-5 h-5 rounded-full bg-teal-500 bg-opacity-90 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">-</button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="bg-blue-500 p-2 px-8 text-sm text-center text-white rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
