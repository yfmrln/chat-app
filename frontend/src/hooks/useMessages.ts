import { useEffect, useState } from "react";
import { createMessage, updateMessage, deleteMessage, subscribeMessages } from "../firebase/firestore";
import type { Message } from "../types/message";

export function useMessages( topicId:string|null ){

    const [ messages, setMessages ] = useState<Message[]>([]);

    useEffect(()=>{
        if(!topicId){
            setMessages([]);
            return;
        }

        const unsubscribe = subscribeMessages(
            topicId,
            (data)=>{
                setMessages(
                data as Message[]
                );
            }
        );

        return ()=>unsubscribe();

    },[topicId]);

    async function sendMessage(
        text:string,
        userId:string,
        username:string
    ){
        if(!topicId)return;
        await createMessage(
            topicId,
            {
            text,
            userId,
            username,
            }
        );
    }

    async function editMessage(
        messageId:string,
        text:string
    ){
        if(!topicId)return;
        await updateMessage(
        topicId,
        messageId,
        text
        );
    }

    async function removeMessage(
        messageId:string
    ){
        if(!topicId)return;
        await deleteMessage(
            topicId,
            messageId
        );
    }

    return {
        messages,
        sendMessage,
        editMessage,
        removeMessage
    };
    
}