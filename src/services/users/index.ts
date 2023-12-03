import { sign, verify } from 'jsonwebtoken';
import { hash, compare } from 'bcryptjs';
import process from 'process';
// import prisma from '@/libs/prisma';
// import { user, user_userType } from '@prisma/client'


// const SECRET = process.env.JWT_SECRET as string;

// interface BodyProps {
//     email: string
//     password: string
//     role: user_userType
// }


// export const createToken = async (user: user) => {
//     return sign({ id: user.idUser ,email: user.dsEmail, userType: user.userType }, SECRET)
// }   

// const readToken = (token: any) => {
//     try {
//         return verify(token, SECRET);
//     } catch (error) {
//         throw new Error('Invalid Token');
//     }
// }


// export const verifyToken =  async(token: any) => {
//     return readToken(token);
// }


// export const register = async (body: BodyProps) => {

//     const { email, password, role = 'admin' } = body;

//     const user = await prisma.user.findUnique({
//         where: {
//             dsEmail: email
//         }
         
//     })
    
//     if(user) throw new Error('User already exists');
    
//     const encryptedPassword = await hash(password, 10);

//     await prisma.user.create({
//         data: {
//             dsEmail: email.toLowerCase(),
//             dsPassword: encryptedPassword,
//             userType: role
//         }
//     })


//     const userCreated = await prisma.user.findUnique({
//         where: {
//             dsEmail: email
//         }
//     }) as user
    
//     const accessToken = await createToken(userCreated);

//     return accessToken;
// }

// export const signIn = async (body: BodyProps) => {

//     const { email, password } = body;

//     const user = await prisma.user.findUnique({
//         where: {
//             dsEmail: email
//         }
//     }) as user



//     if(!user || !(await compare(password, user.dsPassword as string))) throw new Error('Invalid credentials');


//     const accessToken = await createToken(user);


//     const { dsEmail, userType } = user;

//     return { 
//         accessToken: accessToken,
//         user: {
//             idUser: user.idUser,
//             dsEmail: user.dsEmail,
//             userType: user.userType
//         }
//     }
// }


// export const currentUser = async (headers: any) => {
//     const { authorization } = headers;

//     const user = readToken(authorization);
//     return user

    

// }
