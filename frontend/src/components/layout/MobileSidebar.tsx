import Sidebar from "./Sidebar";
import { X } from "lucide-react";
import { useLayoutStore } from "../../store/layoutStore";
import type { Topic } from "../../types/topic";

interface MobileSidebarProps {
  onSelect: (topic: Topic) => void;
}

export default function MobileSidebar({
  onSelect,
}: MobileSidebarProps) {

    const sidebarOpen = useLayoutStore( (state) => state.sidebarOpen );
    const closeSidebar = useLayoutStore( (state) => state.closeSidebar );

    return (
        <aside
            className={`
                fixed
                top-0
                left-0
                z-50
                h-full
                w-72
                bg-gray-900
                border-r
                border-gray-700
                transform
                transition-transform
                duration-300
                ease-in-out
                md:hidden
                flex
                flex-col
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                `}
        >
            <div 
                className="
                    flex
                    items-center
                    justify-between
                    px-4
                    h-14
                    border-b
                    border-gray-700
                    "
            >
                <h2 className="font-bold">
                    Topics
                </h2>
                <button 
                    onClick={closeSidebar}
                    className="
                    text-gray-400
                    hover:text-white
                    transition
                    "
                >
                    <X size={22}/>
                </button>
            </div>
            <div className="flex-1 overflow-hidden">
                <Sidebar mobile onSelect={onSelect} />
            </div>
        </aside>
    );
}