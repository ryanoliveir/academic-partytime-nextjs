import type { NextApiResponse, NextApiRequest } from 'next';
import { signIn } from '@services/users';

const allowMethods = [`POST`];


export default async function handle(req: NextApiRequest, res: NextApiResponse){
    try {
        if(!req.method || !allowMethods.includes(req.method) || req.method === `OPTIONS`){
            return res.status(405).send({ message: `Method not allowed.` });
        }
        
        const data = await signIn(req.body);
        res.status(200).json(data);

    } catch (error: any){
        return res.status(400).json(error.message)
    }

}