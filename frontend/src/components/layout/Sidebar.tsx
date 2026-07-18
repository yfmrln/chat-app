import { useState } from "react";
import { createTopic } from "../../firebase/firestore";
import { useAuthStore } from "../../store/authStore";
import { useTopics } from "../../hooks/useTopics";
import TopicList from "../topic/TopicList";
import UserMenu from "../UserMenu";
import type { Topic } from "../../types/topic";
import { useLayoutStore } from "../../store/layoutStore";

interface Props {
    onSelect: (topic: Topic) => void;
    mobile?: boolean;
}

export default function Sidebar({
    onSelect,
    mobile = false,
}: Props){
    const topics = useTopics();
    const user = useAuthStore( state=>state.user );
    const [
        title,
        setTitle
    ] = useState("");
    const closeSidebar = useLayoutStore( state=>state.closeSidebar );

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
            w-72
            bg-gray-900
            border-r
            border-gray-700
            flex
            flex-col
            h-full
            overflow-hidden
        ">
            <div className="p-4">
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
            </div>

            <div className="
                overflow-y-auto
                flex-1
            ">
                <TopicList
                    topics={topics}
                    mobile={mobile}
                        onSelect={(topic) => {
                            onSelect(topic);
                            if (mobile) {
                                closeSidebar();
                            }
                        }}
                />
            </div>
            <div className="border-t border-gray-700 p-4 shrink-0">
                <UserMenu/>
            </div>
        </aside>

        
    )
}