import { useMutation } from "react-query";
import axios from 'axios';

interface loginProps {
    email: string
    password: string
}

const fetchSignIn = async (body: loginProps) => {
    const response = await axios.post('/api/users/login', body,{
        headers: { 'Content-Type': 'application/json' },
    });

    if(!response) throw new Error('Error send login data');
    return response.data
}


export const useLogin = () => {
    return useMutation(fetchSignIn);
}

