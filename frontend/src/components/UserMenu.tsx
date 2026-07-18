import { logout } from "../firebase/auth";

export default function UserMenu(){

    return (
        <button
            className="
            text-sm
            text-gray-400
            "
            onClick={logout}
        >
            ログアウト
        </button>
    )

}