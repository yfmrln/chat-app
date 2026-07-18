import { useState } from "react";
import type { Message } from "../types/message";

interface Props{
    message:Message;
    currentUserId:string;
    onEdit:(id:string,text:string)=>void;
    onDelete:(id:string)=>void;
}

export default function MessageItem({
    message,
    currentUserId,
    onEdit,
    onDelete
}:Props){
    // const [ editing, setEditing ] = useState(false);
    // const [ text, setText ] = useState(message.text);
    // const isOwner = message.userId === currentUserId;

    // function save(){
    //     onEdit(
    //     message.id,
    //     text
    //     );
    //     setEditing(false);
    // }

    const mine =　message.userId === currentUserId;

    return (
        <div className={`
            flex
            mb-4
        ${mine ? "justify-end":"justify-start"}
        `}>
            <div className={`
                max-w-md
                rounded-lg
                px-4
                py-3
                ${mine ? "bg-indigo-600" : "bg-gray-700"}
            `}>
                <div className="
                    text-sm
                    opacity-70
                ">
                    {message.username}

                </div>
                <div>
                    {message.text}
                </div>
                {
                    mine &&
                    <div className="
                        mt-2
                        text-xs
                        space-x-2
                    ">
                        <button
                            onClick={()=>{ 
                                const text = prompt("編集内容",message.text);
                                if(text)
                                onEdit(
                                    message.id,
                                    text
                                );
                            }}
                        >
                        編集
                        </button>
                        <button
                            onClick={()=>onDelete(message.id)}
                        >
                        削除
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}
