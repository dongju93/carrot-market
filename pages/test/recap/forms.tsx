import type { NextPage } from "next";

const FormRecap: NextPage = () => {
    return (
        // focus-within : form안에 input이 focus되어있을 때 스타일 적용 (pseudo selector)
        <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-yellow-300">
            <input
                type="text"
                // required : input 속성에 required가 있을 때만 스타일 적용
                // placeholder-shown : placeholder가 보여질 때만 스타일 적용
                className="required:border-2 border-teal-800
                placeholder-shown:bg-green-400"
                required
                placeholder="Username"
            />
            <input
                type="password"
                // invalid : input이 유효하지않은 값일 때 스타일 적용
                // valid : input이 유효한 값일 때 스타일 적용
                className="invalid:bg-red-300 valid:bg-teal-300"
                required
                placeholder="Password"
            />
            {/* disabled : disabled된 input에 대해 스타일 적용 */}
            <input type="email" className="disabled:opacity-0" disabled />
            <input type="submit" className="bg-white" value="Login" />
        </form>
    );
};

export default FormRecap;
