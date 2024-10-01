import ToastError from "../../components/toast/toastError";
import ToastSucess from "../../components/toast/toastSucess";
import { supabase } from "../supabase/client";
import Cookies from 'js-cookie';

export async function UserLogin( loginData ){
    try {
        const {data,error} = await supabase.auth.signInWithPassword(loginData);
        if(error != null && error.status === 400){
            ToastError("Usuário ou senha incorretos!")
            return data
        }
        setCookiesUser(data.data.session)
        ToastSucess("Usuario logado!")
    } catch (error) {
        ToastError(error)
        throw new Error("Login falhou");
    } 
   
}


function setCookiesUser(session){
    const { access_token, expires_at } = session
    Cookies.set('token', access_token, { expires: expires_at });
}

export function getTokenFromCookies() {
    const token = Cookies.get('token');
    return token;
}
