import { FieldErrors, useForm } from "react-hook-form";

// React-Hook-Form 을 사용함으로써 이룰 목표
// 코드 줄이기(반복코드 제거) : clear
// 더 나은 검증 : clear
// 더 나은 에러 핸들링
// input 에 대한 완전한 제어
// 이벤트에 대해 덜 신경쓰기 : clear

interface LoginForms {
    username: string;
    password: string;
    email: string;
}

export default function Forms() {
    // 모든 폼의 state 는 useForm hook 을 사용함
    // register : inpiut CONNECT TO state
    // watch : 입력 변화를 계속 감시
    // 정의한 interface 타입 Form으로 명시
    // formState : 내장함수 중 errors 사용, 사용자에게 error 메시지 UI에 출력
    // mode : LoginForms에 대한 검증 발생순간 지정가능
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForms>({ mode: "onChange" });
    const onValied = (data: LoginForms) => {
        console.log("It's vailed!");
    };
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    };

    // handleSubmit : form이 유효할때 실행(필수), form이 유효하지않을때 실행(옵션)
    return (
        <form onSubmit={handleSubmit(onValied, onInvalid)}>
            <input
                // register 내 있는 모든 속성을 input 엘리먼트에 할당
                // onChange, name, value... 등 모두 입력할 필요가 없음
                // register 내 required true 시 브라우저 HTML 태그보다 강력한 제재 가능
                // Validation Rule에서 에러메시지를 명시해주는 것 만으로도 개발자가 사용자에게 직접 에러메시지를 보여줄 수 있음
                // → 어떤 에러가 발생했는지 추적 할 수 있음
                {...register("username", {
                    required: "Username is required",
                    minLength: {
                        message: "Username should be longer 5 chars",
                        value: 5,
                    },
                })}
                type="text"
                placeholder="Username"
            />
            <input
                {...register("email", {
                    required: "Email is required",
                    validate: {
                        // Custom Validate
                        notGmail: (value) =>
                            !value.includes("@gmail.com")
                                ? ""
                                : "지메일은 허용되지 않습니다",
                    },
                })}
                type="email"
                placeholder="Email"
                className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
            />
            {/* 에러 메시지 출력 */}
            {errors.email?.message}
            <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Password"
            />
            <input type="submit" value="Create Account" />
        </form>
    );
}
