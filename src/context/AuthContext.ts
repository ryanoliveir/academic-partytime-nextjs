import {createContext} from 'react'
import { getCookie } from 'cookies-next';


const token = getCookie('authorization');

export const AuthContext = createContext(token);