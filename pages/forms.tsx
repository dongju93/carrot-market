import React, { useState } from "react";

export default function Forms() {
    // 리액트 "useState" input 이벤트, 기본 상태는 빈 스트링.
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState("");
    const [emailErrors, setEmailErrors] = useState("");

    // onChangeEvent 타입스크립트의 EVENT-REACT-HTML 이벤트로 할당
    const onUsernameChange = (
        event: React.SyntheticEvent<HTMLInputElement>
    ) => {
        const {
            currentTarget: { value },
        } = event;
        setUsername(value);
    };
    const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        // Error 출력 후 유저가 재입력 하였을 때 에러메시지 초기화 
        setEmailErrors("");
        setEmail(value);
    };
    const onPasswordChange = (
        event: React.SyntheticEvent<HTMLInputElement>
    ) => {
        const {
            currentTarget: { value },
        } = event;
        setPassword(value);
    };
    const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 사용자가 개발자 도구에서 HTML 속성을 제거하고 입력을 했을때를 가정하고
        // Empty 입력으로 onSubmit 을 했을 때 보여질 에러 처리
        if (username === "" || email === "" || password === "") {
            setFormErrors('All forms are required')
        }
        if (!email.includes("@")) {
            setEmailErrors('Email is required!')
        }
        console.log(username, email, password);
    };

    // 폼 자체와 각 입력에 onChange 이벤트 할당
    // 브라우저 개발자 도구에서 제거 가능!, 에러 메시지 출력 필요
    return (
        <form onSubmit={onSubmit}>
            <input
                value={username}
                onChange={onUsernameChange}
                type="text"
                placeholder="Username"
                required
                minLength={5}
            />
            <input
                value={email}
                onChange={onEmailChange}
                type="email"
                placeholder="Email"
                required
            />
            {emailErrors}
            <input
                value={password}
                onChange={onPasswordChange}
                type="password"
                placeholder="Password"
                required
            />
            <input type="submit" value="Create Account" />
        </form>
    );
}
