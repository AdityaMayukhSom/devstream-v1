interface MandelbrotWorkerInjectPayload {
    real: number;
    imag: number;
    row: number;
    col: number;
}

interface MandelbrotWorkerReturnPayload {
    isStable: boolean;
    row: number;
    col: number;
}

export type { MandelbrotWorkerInjectPayload, MandelbrotWorkerReturnPayload };
