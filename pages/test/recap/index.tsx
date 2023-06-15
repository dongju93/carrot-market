import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        // 4개의 열을 가진 Grid 생성
        //
        // pt, pb, pl, pr, px, py : Padding 위,아래,좌,우,좌우(x축),위아래(y축)
        // rem : pixle과 다른 단위, document font size를 기준으로 함, 브라우저에 따른 크기 자동조정
        // flex : wrapper div에 적용하는 class, 하위 div(flex.item)을 손쉽게 제어가능함, 좌측 레이어 혹은 우측 레이아웃만 가능
        // space : 하위요소(여기서는 flex.item)간 간격을 지정해 줄 수 있음(space-y-5 : 하위요소 y축 간격 = mb-5, mt-5)
        // grid : wrapper div에 적용하는 class, 하위 div(grid.item)을 손쉽게 제어가능함, 좌우측 레이아웃 동시제어 가능
        // shadow : 그림자 설정 및 그림자 크기 지정가능
        // min-h : 크기를 화면에 꽉 체울것인지, 특정한 크기까지만 채울것인지 지정가능
        <div className="bg-slate-500 px-10 py-20 grid gap-10 min-h-screen">
            {/* rounded : div 네모 BOX의 모서리 둥근 정도 */}
            <div className="bg-white rounded-3xl shadow-2xl p-6">
                {/* font-semibond : 폰트의 굵기 지정(light, normal, bond.. */}
                {/* text-3xl : 텍스트의 크기 지정(xs, xl..) */}
                <span className="font-semibold text-3xl">Select Item</span>
                {/* justify-between : 하위요소 간 균일한 간격을 줌 */}
                <ul>
                    {/* array.map 적용 */}
                    {/* first, last : array의 첫번째, 마지막 순서에만 특정한 스타일을 부여함 */}
                    {/* only : array에 단 1개의 요소만 존재할 경우 스타일을 부여함 */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        // #2
                        // <div key={i} className="flex justify-between first:bg-blue-300 last:bg-blue-100 only:bg-red-500">
                        // #2

                        <div
                            key={i}
                            // odd, even : array 요소가 짝수거나 홀수일때 스타일을 부여함
                            className="flex justify-between odd:bg-blue-50 even:bg-slate-50"
                        >
                            <span className="text-gray-500 my-2">
                                Grey Chair
                            </span>
                            <span className="font-semibold">$19</span>
                        </div>
                    ))}
                </ul>
                <ul>
                    {/* array에 비어있는(empty) 요소를 특정(target)하여 스타일을 부여함 */}
                    {["a", "b", "c", "", "e"].map((c, i) => (
                        <li className="bg-red-400 py-2 empty:bg-teal-500">
                            {c}
                        </li>
                    ))}
                </ul>

                {/* #1 */}
                {/* <div className="flex justify-between">
                    <span className="text-gray-500">Grey Chair</span>
                    <span className="font-semibold">$19</span>
                </div> */}
                {/* #1 */}

                {/* border : 테두리 위치 및 pixel 크기 지정 / 테두리 스타일 지정 */}
                <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                    <span>Total</span>
                    <span className="font-semibold">$38</span>
                </div>
                {/* w : w-2와 같이 가로 rem 크기로 절대적 지정이 가능하지만, w-1/2 같이 50% 크기로 지정도 가능 */}
                {/* Modifiers : [Notion] Frameworks-TailwindCSS */}
                <button
                    className="mt-5 bg-blue-500 text-white p-3 w-1/2 mx-auto text-center rounded-xl hover:bg-teal-700 hover:text-black
                            active:bg-yellow-500 focus:text-red-500"
                >
                    Checkout
                </button>
            </div>
            {/* overflow : 영역보다 컨텐츠가 클때 보여주거나 숨길 수 있음 */}
            <div className="bg-white overflow-hidden rounded-3xl shadow-2xl">
                <div className="bg-blue-500 p-6 pb-14">
                    <span className="text-white text-2xl">Profile</span>
                </div>
                {/* relative : 지정된 div 내로 영역 제한 */}
                <div className="rounded-3xl bg-white relative -top-5 p-6">
                    {/* items : 하위 item의 위치 조정 */}
                    <div className="flex relative -top-16 items-end justify-between">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">
                                Orders
                            </span>
                            <span className="font-medium">340</span>
                        </div>
                        <div className="h-24 w-24 bg-red-300 rounded-full" />
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
            <div className="bg-white rounded-3xl shadow-2xl p-6">
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
                            {/* 사용자가 버튼을 클릭했을 때 Visual feedback을 줄 수 있도록 transition 적용 */}
                            {/* focus modifier, ring utility, just-in-time compiler */}
                            {/* ring : CSS의 Box shadows로 생성된 링(ring), 색상(ring-yellow), 크기(ring-2), 간격(ring-offset-2), 투명도(ring-opacity-50)를 조절하여 색 연하게 표현이 가능함 */}
                            {/* focus:ring 을 부여함으로서 ring을 구성하는 하위요소는 focus될 때만 영향을 받아 나타남 */}
                            {/* transition : fade-in, out 에니메이션 */}
                            <button className="w-5 h-5 rounded-full bg-yellow-500 transition focus:ring-2 ring-offset-2 ring-yellow-500 ring-opacity-90" />
                            <button className="w-5 h-5 rounded-full bg-indigo-500 transition focus:ring-2 ring-offset-2 ring-indigo-500 ring-opacity-90" />
                            <button className="w-5 h-5 rounded-full bg-green-500 transition focus:ring-2 ring-offset-2 ring-green-500 ring-opacity-90" />
                        </div>
                        <div className="flex items-center space-x-5">
                            {/* aspect-square : 정사각형 */}
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
