import { Menu } from "lucide-react";
import { useLayoutStore } from "../../store/layoutStore";

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {

    const openSidebar = useLayoutStore(
        state => state.openSidebar
    );

    return (

        <header className="h-14 border-b border-gray-700 bg-gray-900 flex items-center px-4">
            <button
                className="
                md:hidden
                text-gray-300
                hover:text-white
                "
                onClick={openSidebar}
            >
                <Menu size={24}/>
            </button>
            <h1 className="font-semibold">
                {title}
            </h1>
        </header>
    );
}