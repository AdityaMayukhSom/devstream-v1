type MandelbrotWorkerInjectPayload = {
  real: number;
  imag: number;
  row: number;
  col: number;
};

type MandelbrotWorkerReturnPayload = {
  isStable: boolean;
  row: number;
  col: number;
};
