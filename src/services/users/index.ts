import { sign, verify } from 'jsonwebtoken';
import { hash, compare } from 'bcryptjs';
import process from 'process';
import prisma from '@/libs/prisma';
import { user, user_privilege} from '@prisma/client'


const SECRET = process.env.JWT_SECRET as string;

interface BodyProps {
    email: string
    password: string
    birth_date: string
    name: string
    privilage: user_privilege
}


export const createToken = async (user: user) => {
    return sign({ id: user.id ,email: user.email, userType: user.privilege}, SECRET)
}   

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


export const register = async (body: BodyProps) => {

    const { email, name, password, birth_date, privilage = 'admin' } = body;

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
         
    })
    
    if(user) throw new Error('User already exists');
    
    const encryptedPassword = await hash(password, 10);


    
    await prisma.user.create({
        data: {
            email: email.toLowerCase(),
            password: encryptedPassword,
            birth_date: new Date(birth_date),
            name: name,
            privilege: privilage
        }
    })


    const userCreated = await prisma.user.findUnique({
        where: {
            email: email
        }
    }) as user
    
    const accessToken = await createToken(userCreated);

    return accessToken;
}

export const signIn = async (body: BodyProps) => {

    const { email, password } = body;

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    }) as user



    if(!user || !(await compare(password, user.password as string))) throw new Error('Invalid credentials');


    const accessToken = await createToken(user);


    return { 
        accessToken: accessToken,
        user: {
            idUser: user.id,
            dsEmail: user.email,
            userType: user.privilege
        }
    }
}


// export const currentUser = async (headers: any) => {
//     const { authorization } = headers;

//     const user = readToken(authorization);
//     return user

    

// }
