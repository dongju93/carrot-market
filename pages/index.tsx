import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    // 전체 그리드 생성
    <div className="bg-slate-500 py-20 px-20 grid gap-10">
      {/* select itmes box */}
      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-yellow-500">Yellow Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$38</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">Checkout</div>
      </div>
      {/* Profile box */}
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative bg-white -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">5</span>
            </div>
            <div className="h-24 w-24 bg-lime-500 rounded-full" />
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
      <div className="bg-white p-10 rounded-2xl shadow-sm"></div>
      <div className="bg-white p-10 rounded-2xl shadow-sm"></div>
    </div>
  );
}

export default Home;
