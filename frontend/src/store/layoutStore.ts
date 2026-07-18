import { create } from "zustand";

interface LayoutState {
    sidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    toggleSidebar: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({

    sidebarOpen: false,
    openSidebar: () => set({ sidebarOpen: true }),
    closeSidebar: () => set({ sidebarOpen: false }),
    toggleSidebar: () =>
        set((state) => ({
            sidebarOpen: !state.sidebarOpen,
        })),
}));