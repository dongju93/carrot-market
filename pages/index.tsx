import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-500 py-20 px-10 flex flex-col space-y-10">
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
      <div className="bg-white p-10 rounded-2xl shadow-sm"></div>
      <div className="bg-white p-10 rounded-2xl shadow-sm"></div>
      <div className="bg-white p-10 rounded-2xl shadow-sm"></div>
    </div>
  );
}

export default Home;
