import Complex from "@lib/complex";

class MandelbrotCompute {
    private static readonly MAX_ITERATION = 40;

    public static isStable(real: number, imag: number, maxIters = MandelbrotCompute.MAX_ITERATION): boolean {
        const c = new Complex(real, imag);
        const z = new Complex(0, 0);

        for (let index = 0, dist = 0, z2pc = new Complex(0, 0); index < maxIters; index++) {
            z2pc.x = z.x * z.x - z.y * z.y + c.x;
            z2pc.y = 2 * z.x * z.y + c.y;
            z.x = z2pc.x;
            z.y = z2pc.y;
            dist = z.x * z.x + z.y * z.y;
            if (dist > 4) {
                return false;
            }
        }

        return true;
    }
}

export default MandelbrotCompute;
