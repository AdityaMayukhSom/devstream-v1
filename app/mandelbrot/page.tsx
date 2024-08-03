"use client";

import Mandelbrot from "@components/mandelbrot";
import { useWindowDimention } from "@custom-hooks";

const MandelbrotPage = () => {
    const dimention = useWindowDimention();

    return (
        <main>
            <Mandelbrot dimention={dimention} />
        </main>
    );
};

export default MandelbrotPage;
