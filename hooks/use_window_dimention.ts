import { useState, useEffect } from "react";
import Dimention from "@classes/dimention";

const useWindowDimention = () => {
    const [dimention, setDimention] = useState(new Dimention(0, 0));

    useEffect(() => {
        const updateDimention = () => {
            const newDimention = new Dimention(window.innerWidth, window.innerHeight);
            setDimention(newDimention);
        };

        window.addEventListener("resize", updateDimention);
        updateDimention();

        return () => {
            window.removeEventListener("resize", updateDimention);
        };
    }, []);

    return dimention;
};

export { useWindowDimention };
