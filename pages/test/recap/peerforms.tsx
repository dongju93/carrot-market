import { NextPage } from "next";

const PeerForms: NextPage = () => {
    return (
        <form className="flex flex-col space-y-2 p-5">
            {/* peer : Labled */}
            <input
                type="text"
                required
                placeholder="Username"
                className="border p-1 peer border-gray-400 rounded-md"
            />
            {/* peer modifier는 위 input의 state에 따라 아래 span의 스타일을 바꿀 수 있음 */}
            {/* 기본으로 감춰져 있다가, peer(input)의 상태(state)가 invalid 라면 보이도록(block) 스타일링 */}
            <span className="hidden peer-invalid:block peer-invalid:text-red-500">
                This input is invalid!
            </span>
            {/* valid 할 때 */}
            <span className="hidden peer-valid:block peer-valid:text-green-500">
                You look great!
            </span>
            <input type="submit" value="Login" className="bg-white" />
        </form>
    );
};

export default PeerForms;
