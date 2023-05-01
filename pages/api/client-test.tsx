// API 라우트
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    //  API 라우트로 유저 생성 예시, async/await 사용, response 반환
    await client.user.create({
        data:{
        email: "dasd@naver.com",
        name: "dasd",
        },
    });
    res.json({
        ok: true,
        data: "xx"
    });
};
