import { NextPage } from "next";

const Details: NextPage = () => {
    return (
        <div className="flex flex-col space-y-2 p-5">
            {/* datils와 summary TAG는 HTML 기능 */}
            {/* Open : Toggle을 열 때 스타일 적용 */}
            <details className="select-none open:text-white open:bg-indigo-300">
                {/* cursor-pointer : 마우스 포인터가 선택모양(손)으로 변경됌 */}
                <summary className="cursor-pointer">It is what it is.</summary>
                {/* selection : 선택(Drag)되었을 때 스타일 적용 */}
                {/* <span className="selection:bg-indigo-500 selection:text-white"> */}
                <span>Accept it and move on.</span>
            </details>
            {/* list-disc : List를 점(•) 모양으로 구분
            marker : List의 구분 마커(•)에 스타일 적용 */}
            <ul className="list-disc marker:text-teal-600">
                <li>glow in the dark</li>
                <li>glow in the dark</li>
                <li>glow in the dark</li>
            </ul>
            {/* file : 파일 업로드 아이콘에 스타일 적용 */}
            <input
                type="file"
                // ❑ 중첩 Modifiers
                // file:hover : file 아이콘에 hover 되었을 때 스타일 적용
                className="file:cursor-pointer file:only:transition-colors file:border-0 file:rounded-lg file:px-2 file:text-black file:bg-purple-200
                file:hover:text-black file:hover:bg-white file:hover:border-2"
            />
            <p className="first-letter:text-2xl first-letter:hover:text-red-500">
                I was a little boy..
            </p>
        </div>
    );
};

export default Details;
