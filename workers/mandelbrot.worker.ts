import MandelbrotCompute from "@/classes/mandelbrot_compute";
import type { MandelbrotWorkerInjectPayload, MandelbrotWorkerReturnPayload } from "@/workers/payloads";

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

// const workerFunction = function () {
//     //we perform every operation we want in this function right here
//     self.onmessage = (event: MessageEvent<Complex>) => {
//         console.log("inside worker script");
//         const point = event.data;
//         const isMandelbrot = MandelbrotCompute.isStable(point.x, point.y);
//         postMessage(isMandelbrot);
//     };
// };

// //This stringifies the whole function
// const codeToString = workerFunction.toString();
// //This brings out the code in the bracket in string
// const mainCode = codeToString.substring(codeToString.indexOf("{") + 1, codeToString.lastIndexOf("}"));
// //convert the code into a raw data
// const blob = new Blob([mainCode], { type: "application/javascript" });
// //A url is made out of the blob object and we're good to go
// const mandelbrotWorker = URL.createObjectURL(blob);

// export default mandelbrotWorker;
