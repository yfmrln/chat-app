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

        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl bg-gray-800 p-8 shadow-xl">

                <h1 className="mb-8 text-center text-3xl font-bold text-white">
                    ログイン
                </h1>

                <div className="space-y-4">

                    <input
                        className="
                            w-full
                            rounded-md
                            border
                            border-gray-700
                            bg-gray-700
                            px-4
                            py-3
                            text-white
                            placeholder:text-gray-400
                            focus:border-blue-500
                            focus:outline-none
                        "
                        placeholder="メールアドレス"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="
                            w-full
                            rounded-md
                            border
                            border-gray-700
                            bg-gray-700
                            px-4
                            py-3
                            text-white
                            placeholder:text-gray-400
                            focus:border-blue-500
                            focus:outline-none
                        "
                        placeholder="パスワード"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={handleLogin}
                        className="
                            w-full
                            rounded-md
                            bg-blue-600
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-700
                        "
                    >
                        ログイン
                    </button>

                </div>

                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-gray-700" />
                    <span className="mx-3 text-sm text-gray-400">
                        または
                    </span>
                    <div className="flex-1 border-t border-gray-700" />
                </div>

                <div className="space-y-3">

                    <button
                        onClick={() => navigate("/register")}
                        className="
                            w-full
                            rounded-md
                            border
                            border-gray-600
                            py-3
                            text-gray-200
                            transition
                            hover:bg-gray-700
                        "
                    >
                        新規ユーザー登録
                    </button>

                    <button
                        onClick={handleAnonymous}
                        className="
                            w-full
                            rounded-md
                            bg-gray-700
                            py-3
                            text-white
                            transition
                            hover:bg-gray-600
                        "
                    >
                        匿名ログイン
                    </button>

                </div>

            </div>
        </div>
    )
}