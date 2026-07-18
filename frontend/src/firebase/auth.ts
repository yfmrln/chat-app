import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInAnonymously,
    signOut
} from "firebase/auth";
import { auth } from "./firebase";

// 登録
export async function register(
    email:string,
    password:string
){
    if(!email.includes("@")){
        throw new Error(
        "メールアドレス形式が不正です"
        );
    }
    return await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
}


// ログイン
export async function login(
    email:string,
    password:string
){
    return await signInWithEmailAndPassword(
        auth,
        email,
        password
    );
}

// 匿名ログイン
export async function anonymousLogin(){
    return await signInAnonymously(auth);
}



// ログアウト
export async function logout(){
    return await signOut(auth);
}