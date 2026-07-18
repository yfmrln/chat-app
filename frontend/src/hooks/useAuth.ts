import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuthStore } from "../store/authStore";

export function useAuth(){

    const {
        setUser,
        setLoading
    } = useAuthStore();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(
            auth,
            (user)=>{ 
                setUser(user);
                setLoading(false);
            }
        );

        return ()=>unsubscribe();

    },[]);

}