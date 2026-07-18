import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import MobileSidebar from "../components/layout/MobileSidebar";
import Overlay from "../components/layout/Overlay";
import MessageInput from "../components/chat/MessageInput";
import ChatWindow from "../components/chat/ChatWindow";

import { useMessages } from "../hooks/useMessages";
import { useAuthStore } from "../store/authStore";
import type { Topic } from "../types/topic";

export default function Chat(){

    const user = useAuthStore( (state) => state.user );
    const [topic, setTopic] = useState<Topic | null>(null);

    const {
        messages,
        sendMessage,
        editMessage,
        removeMessage,
     } = useMessages(topic?.id ?? null);

    return (
        <div className="h-screen flex bg-gray-800 text-white">
            <Overlay />
            <MobileSidebar
                onSelect={setTopic}
            />
            <div className="hidden md:flex">
                <Sidebar
                    onSelect={setTopic}
                />
            </div>
            <div className="flex-1 flex flex-col">
                <Header
                    title={
                        topic
                            ? `# ${topic.title}`
                            : "Topicを選択"
                    }
                />
                <ChatWindow
                    messages={messages}
                    currentUserId={user?.uid ?? ""}
                    onEdit={editMessage}
                    onDelete={removeMessage}
                />
                {
                    topic && (
                        <MessageInput
                            onSend={(text) => {
                                if (!user) return;
                                sendMessage(
                                    text,
                                    user.uid,
                                    user.email ?? "Guest"
                                );
                            }}
                        />
                    )
                }
            </div>
        </div>
    )
}