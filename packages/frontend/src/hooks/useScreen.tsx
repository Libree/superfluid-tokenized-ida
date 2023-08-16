'use client'

import { useEffect, useState } from "react";

type useScreenType = {
    width: number;
    height: number;
};

export default function useScreen(): useScreenType {
    const [screen, setScreen] = useState<useScreenType>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleChange = () => {
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleChange();
        window.addEventListener('resize', handleChange);

        return () => window.removeEventListener('resize', handleChange);
    }, []);

    return screen;
};
