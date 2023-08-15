'use client'

import { useState } from "react";

type useSidebarType = {
    sidebarToggle: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
};

export default function useSidebar(): useSidebarType {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const toggleSidebar = () => setSidebarToggle(!sidebarToggle);

    const closeSidebar = () => setSidebarToggle(false);

    return {
        sidebarToggle,
        toggleSidebar,
        closeSidebar,
    };
};
