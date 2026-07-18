import { useLayoutStore } from "../../store/layoutStore";

export default function Overlay() {
  const sidebarOpen = useLayoutStore( (state) => state.sidebarOpen );
  const closeSidebar = useLayoutStore( (state) => state.closeSidebar );

    if (!sidebarOpen) return null;
    return (
        <div
            onClick={closeSidebar}
            className="
                fixed
                inset-0
                bg-black/50
                backdrop-blur-sm
                z-40
                md:hidden
                "
        />
    );
}