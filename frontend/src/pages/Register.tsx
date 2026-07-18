import { useState } from "react";
import { register } from "../firebase/auth";
import { createUserProfile } from "../firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Register(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegister(){

        try{
            const result =
                await register(
                    email,
                    password
                );
            await createUserProfile(
                result.user.uid,
                {
                    name:
                    email.split("@")[0],
                    email,
                    anonymous:false
                }
            );
            navigate("/chat");

        }catch(error:any){
            console.error(error);
            alert(error.message);
        }

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
                新規登録
                </h1>
                <input
                    className="border p-2 block mb-3"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={
                        e=>setEmail(e.target.value)
                    }
                />
                <input
                className="border p-2 block mb-3"
                type="password"
                placeholder="Password"
                value={password}
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
                "
                onClick={handleRegister}
                >
                登録
                </button>
            </div>
        </div>
    )
}