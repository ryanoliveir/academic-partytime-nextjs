import type { NextApiResponse, NextApiRequest } from 'next';
import { register } from '@services/users'

const allowMethods = [`POST`];

export default async function handle(req: NextApiRequest, res: NextApiResponse){
    try {
        if(!req.method || !allowMethods.includes(req.method) || req.method === `OPTIONS`){
            return res.status(405).send({ message: `Method not allowed.` });
        }

        const token = await register(req.body);
        res.status(201).json({ accesToken: token });

    } catch (error: any){
        return res.status(400).json(error.message);
    }

}