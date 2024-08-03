"use client";

import { useEffect, useMemo, useRef } from "react";
import Dimention from "@lib/dimention";
import MandelbrotRenderer from "@lib/mandelbrot_renderer";

const MandelbrotComponent = (props: { dimention: Dimention }) => {
    const mandelbrotCanvasRef = useRef<HTMLCanvasElement>(null);
    const mandelbrotRenderer = useMemo(() => new MandelbrotRenderer(), []);

    useEffect(() => {
        if (mandelbrotCanvasRef.current) {
            let { width, height } = props.dimention;

            if (2 * width < 3 * height) {
                height = 0.66 * width;
            } else {
                width = 1.5 * height;
            }

            mandelbrotRenderer.draw(mandelbrotCanvasRef.current, width, height);
        }

        return () => {
            mandelbrotRenderer.release();
        };
    }, [props.dimention, mandelbrotRenderer]);

    return <canvas ref={mandelbrotCanvasRef} className="m-auto" />;
};

export default MandelbrotComponent;
