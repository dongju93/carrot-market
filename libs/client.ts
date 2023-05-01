// DB에 직접 접속, 프론트엔드에서는 로드되서는 안됌
import { PrismaClient } from "@prisma/client";

export default new PrismaClient();

//ex) User 생성 
// client.user.create({
//     data:{
//     email: "dasd@naver.com",
//     name: "dasd",
//     }
// });

// Prisma client에 모델 생성
// nnpx prisma generate