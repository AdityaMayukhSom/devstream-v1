class MandelbrotCompute {
  private static readonly MAX_ITERATION = 40;

  public static isStable(real: number, imag: number, maxIters = MandelbrotCompute.MAX_ITERATION): boolean {
    const c: Complex = { real, imag };
    const z: Complex = { real: 0, imag: 0 };

    for (let index = 0, dist = 0, z2pc: Complex = { real: 0, imag: 0 }; index < maxIters; index++) {
      z2pc.real = z.real * z.real - z.imag * z.imag + c.real;
      z2pc.imag = 2 * z.real * z.imag + c.imag;
      z.real = z2pc.real;
      z.imag = z2pc.imag;
      dist = z.real * z.real + z.imag * z.imag;
      if (dist > 4) {
        return false;
      }
    }

    return true;
  }
}

export { MandelbrotCompute };
