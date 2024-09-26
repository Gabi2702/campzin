import ToastError from "../../components/toast/toastError";
import ToastSucess from "../../components/toast/toastSucess";
import { supabase } from "../supabase/client";
import Cookies from 'js-cookie';

export async function UserLogin( loginData ){
    try {
        const data = await supabase.auth.signInWithPassword(loginData);
        if(data.error != null && data.error.status === 400){
            ToastError("Usuário ou senha incorretos!")
            return
        }
        setCookiesUser(data.data.session)
        ToastSucess("Usuario logado!")
    } catch (error) {
        console.log(error)
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
