"use client";

import Mandelbrot from "@components/mandelbrot";
import { useWindowDimention } from "@custom-hooks";

const MandelbrotPage = () => {
    const dimention = useWindowDimention();

    return (
        <main className="bg-white min-h-svh">
            <Mandelbrot dimention={dimention} />
        </main>
    );
};

export default MandelbrotPage;
