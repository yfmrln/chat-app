import { useEffect, useState } from "react";
// import { getTopics } from "../firebase/firestore";
import type { Topic } from "../types/topic";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

export function useTopics(){

    const [ topics, setTopics ] = useState<Topic[]>([]);

    useEffect(()=>{
        const q = query(
            collection(
            db,
            "topics"
            ),
            orderBy(
            "createdAt",
            "desc"
            )
        );

        const unsubscribe =
        onSnapshot(
            q,
            (snapshot)=>{
                const data =
                snapshot.docs.map(
                doc=>({
                    id:doc.id,
                    ...doc.data()
                })
                ) as Topic[];
                setTopics(data);
            },
            (error)=>{
                console.error(
                "topics取得エラー:",
                error
                );
            }
        );

        return ()=>unsubscribe();

    },[]);
    return topics;
}