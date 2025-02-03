const ctx: Worker = self as unknown as Worker;

ctx.addEventListener("message", (event: MessageEvent<MandelbrotWorkerInjectPayload>) => {
  const isStable = MandelbrotCompute.isStable(event.data.real, event.data.imag);

  const returnPayload: MandelbrotWorkerReturnPayload = {
    isStable,
    row: event.data.row,
    col: event.data.col,
  };

  postMessage(returnPayload);
});
