import { useState } from "react";
import { login, anonymousLogin } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(){
        try{
            await login(
            email,
            password
            );
            navigate("/chat");
        }catch(error:any){
            console.error(error);
            alert(
            "ログイン失敗: " + error.message
            );
        }
    }

    async function handleAnonymous(){
        await anonymousLogin();
        navigate("/chat");
        }



    return (
        <div className="
            min-h-screen
            flex
            items-center
            justify-center
        ">
            <div>
                <h1 className="
                    text-3xl
                    mb-5
                ">
                ログイン
                </h1>
                <input
                    className="border p-2 block mb-3"
                    placeholder="Email"
                    onChange={
                    e=>setEmail(e.target.value)
                    }
                />
                <input
                    className="border p-2 block mb-3"
                    type="password"
                    placeholder="Password"
                    onChange={
                    e=>setPassword(e.target.value)
                    }
                />
                <button
                    className="
                    bg-blue-500
                    text-white
                    px-4
                    py-2
                    mr-2
                    "
                    onClick={handleLogin}
                >
                ログイン
                </button>
                <button
                    className="
                    bg-gray-700
                    text-white
                    px-4
                    py-2
                    "
                    onClick={handleAnonymous}
                >
                匿名ログイン
                </button>
            </div>
        </div>
    )
}