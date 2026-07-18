import {
    collection,
    addDoc,
    getDocs,
    doc,
    setDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    } from "firebase/firestore";
import { db } from "./firebase";

// =================
// Message追加
// =================
export async function createMessage(
    topicId:string,
    data:{
        text:string;
        userId:string;
        username:string;
        }
){
    return await addDoc(
        collection(
            db,
            "topics",
            topicId,
            "messages"
        ),
        {
            ...data,
            createdAt:
            serverTimestamp()
        }
    );
}

// リアルタイム取得
export function subscribeMessages(
    topicId:string,
    callback:(messages:any[])=>void
){
    const q = query(
        collection(
            db,
            "topics",
            topicId,
            "messages"
        ),
            orderBy(
            "createdAt",
            "asc"
        )
    );
    return onSnapshot(
        q,(snapshot)=>{
            const messages =
            snapshot.docs.map(
                doc=>({
                    id:doc.id,
                    ...doc.data()
                })
            );
            callback(messages);
        }
    );
}

// =================
// Message更新
// =================
export async function updateMessage(

    topicId:string,
    messageId:string,
    text:string
    ){
    const ref = doc(
        db,
        "topics",
        topicId,
        "messages",
        messageId
    );

    await updateDoc(
        ref,
        {
        text
        }
    );
}

// =================
// Message削除
// =================
export async function deleteMessage(
    topicId:string,
    messageId:string
){
    const ref = doc(
        db,
        "topics",
        topicId,
        "messages",
        messageId
    );

    await deleteDoc(ref);
}

// =================
// Topic作成
// =================
export async function createTopic(
    title:string,
    userId:string
){
    return await addDoc(
        collection(
            db,
            "topics"
        ),
        {
            title,
            createdBy:userId,
            createdAt:
            serverTimestamp()
        }
    );
}

// =================
// Topic取得
// =================
export async function getTopics(){

const q =
query(
    collection(
    db,
    "topics"
    ),
    orderBy(
    "createdAt",
    "desc"
    )
);

const snapshot = await getDocs(q);
return snapshot.docs.map(
    doc=>({
    id:doc.id,
    ...doc.data()
    })
);
}

export async function createUserProfile(
    uid:string,
    data:any
){
    await setDoc(
        doc(
            db,
            "users",
            uid
        ),
        {
            ...data,
            createdAt:
            serverTimestamp()
        }
    );
}