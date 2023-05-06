import { useForm } from "react-hook-form";

// React-Hook-Form 을 사용함으로써 이룰 목표 : clear
// 코드 줄이기(반복코드 제거)
// 더 나은 검증
// 더 나은 에러 핸들링
// input 에 대한 완전한 제어
// 이벤트에 대해 덜 신경쓰기 : clear

export default function Forms() {
    // 모든 폼의 state 는 useForm hook 을 사용함
    // register : inpiut CONNECT TO state
    // watch : 입력 변화를 계속 감시
    const { register, watch } = useForm();

    return (
        <form>
            <input
                // register 내 있는 모든 속성을 input 엘리먼트에 할당
                // onChange, name, value... 등 모두 입력할 필요가 없음
                {...register("username")}
                type="text"
                placeholder="Username"
                required
            />
            <input
                {...register("email")}
                type="email"
                placeholder="Email"
                required
            />
            <input
                {...register("password")}
                type="password"
                placeholder="Password"
                required
            />
            <input type="submit" value="Create Account" />
        </form>
    );
}
