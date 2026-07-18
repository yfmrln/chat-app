import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MessageInput from "../components/MessageInput";
import ChatWindow from "../components/ChatWindow";
import { useMessages } from "../hooks/useMessages";
import type { Topic } from "../types/topic";
import { useAuthStore } from "../store/authStore";

export default function Chat(){

    const [
        topic,
        setTopic
    ] = useState<Topic|null>(null);
    const {
        messages, 
        sendMessage,
        editMessage,
        removeMessage
    } = useMessages(topic?.id ?? null);
    const user = useAuthStore( state=>state.user );

    return (
    <div className="
        h-screen
        flex
        bg-gray-800
    ">
    <Sidebar
        onSelect={setTopic}
    />
    <div className="
        flex-1
        flex
        flex-col
    ">
        <header className="
            h-14
            bg-gray-900
            border-b
            border-gray-700
            px-5
            flex
            items-center
            font-bold
        ">
            { topic ? "# "+topic.title : "Topicを選択" }
        </header>
        <ChatWindow 
            messages={messages} 
            currentUserId={ user?.uid ?? "" }
            onEdit={editMessage}
            onDelete={removeMessage}
        />
        { topic &&
            <MessageInput
            onSend={(text)=>{
                if(!user)return;
                sendMessage(
                    text, user.uid, user.email ?? "Guest" );
            }}
            />
        }
        </div>
    </div>
    )
}