import type { Message } from "../../types/message";
import MessageItem from "./MessageItem";

interface Props{ 
    messages:Message[]; 
    currentUserId:string;
    onEdit:(id:string,text:string)=>void;
    onDelete:(id:string)=>void;
}

export default function ChatWindow({
    messages,
    currentUserId,
    onEdit,
    onDelete
}:Props){
    return (
        <div className="
            flex-1
            overflow-y-auto
            bg-gray-800
            p-5
        ">
        {
            messages.map(message=>(
                <MessageItem
                    key={message.id}
                    message={message}
                    currentUserId={currentUserId}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))
        }
        </div>
    )
}