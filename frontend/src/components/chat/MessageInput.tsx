import { useState } from "react";

interface Props{ onSend:(text:string)=>void; }

export default function MessageInput({
    onSend
}:Props){

    const [
        text,
        setText
    ] = useState("");

    function send(){
        if(!text.trim())return;
        onSend(text);
        setText("");
    }

    return (
    <div className="
        p-4
        bg-gray-900
        flex
        gap-3
    ">
        <input
            className="
                flex-1
                bg-gray-800
                rounded
                px-4
                py-3
                outline-none
            "
            value={text}
            onChange={
                e=>setText(e.target.value)
            }
            placeholder="メッセージを入力..."
        />
        <button
            className="
                bg-indigo-600
                px-5
                rounded
                hover:bg-indigo-700
            "
            onClick={send}
            >
            送信
        </button>
    </div>
    )
}