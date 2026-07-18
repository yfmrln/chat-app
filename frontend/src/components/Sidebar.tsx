import { useState } from "react";
import { createTopic } from "../firebase/firestore";
import { useAuthStore } from "../store/authStore";
import { useTopics } from "../hooks/useTopics";
import TopicList from "./TopicList";
import UserMenu from "./UserMenu";

export default function Sidebar({
    onSelect
}:any){
    const topics = useTopics();
    const user = useAuthStore( state=>state.user );
    const [
        title,
        setTitle
    ] = useState("");

    async function add(){
    if(!title.trim() || !user)return;
    await createTopic(
        title,
        user.uid
    );

    setTitle("");
    }

    return (
        <aside className="    
            hidden
            md:flex
            w-72
            bg-gray-900
            border-r
            border-gray-700
            p-4
            flex
            flex-col
        ">
            <h1 className="
                text-xl
                font-bold
                mb-5
            ">
                💬 Topic Chat
            </h1>
            <div className="
                flex
                gap-2
                mb-5
            ">
                <input
                    className="
                    bg-gray-800
                    rounded
                    px-3
                    py-2
                    flex-1
                    outline-none
                    "
                    placeholder="新規Topic"
                    value={title}
                    onChange={　e=>setTitle(e.target.value)　}
                />
                <button
                className="
                    bg-blue-500
                    text-white
                    px-3
                    py-1
                    mt-2
                    "
                    onClick={add}
                >
                +
                </button>
            </div>
            <div className="
                overflow-y-auto
                flex-1
            ">
                <TopicList
                    topics={topics}
                    onSelect={onSelect}
                />
            </div>
            <UserMenu/>
        </aside>

        
    )
}