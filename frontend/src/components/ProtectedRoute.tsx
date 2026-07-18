import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ 
    children
}: Props ){
    const {
        user,
        loading
    } = useAuthStore();

    if(loading){
        return (
            <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
                Loading...
            </div>
        );
    }

    if(!user){
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}