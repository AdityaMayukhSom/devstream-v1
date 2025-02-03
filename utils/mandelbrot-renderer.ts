import MandelbrotWorker from "~/assets/workers/mandelbrot?worker";

class MandelbrotRenderer {
  private static readonly PIXEL_SKIP_SIZE = 5;
  private static readonly PIXEL_CLUSTER_SIZE = 3;
  private static readonly OFFSET_MULTIPLIER = 0;
  private static readonly NUM_WORKERS = 32;

  private static readonly FOREGROUND_COLOR_HEX = "#000000";
  private static readonly BACKGROUND_COLOR_HEX = Colors.random24BitColor(); // '#fda403'

  private static readonly REAL_SET = { start: -2, end: 1 };
  private static readonly IMAG_SET = { start: -1, end: 1 };

  private workers: Worker[];

  constructor() {
    this.workers = new Array<Worker>();
  }

  private scaleReal(real: number, realAxisLength: number): number {
    if (realAxisLength === 0) return 0;
    const actualRealAxisLength = MandelbrotRenderer.REAL_SET.end - MandelbrotRenderer.REAL_SET.start;
    return MandelbrotRenderer.REAL_SET.start + (real * actualRealAxisLength) / realAxisLength;
  }

  private scaleImag(imag: number, imagAxisLength: number): number {
    if (imagAxisLength === 0) return 0;
    const actualImagAxisLength = MandelbrotRenderer.IMAG_SET.end - MandelbrotRenderer.IMAG_SET.start;
    return MandelbrotRenderer.IMAG_SET.start + (imag * actualImagAxisLength) / imagAxisLength;
  }

  public draw(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number) {
    if (!canvas) {
      alert("could not find canvas to draw mandelbrot plot");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("could not find canvas context to draw mandelbrot plot");
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = canvasWidth * 0.85;
    canvas.height = canvasHeight;

    this.workers = new Array<Worker>();
    const OFFSET_SIZE = (MandelbrotRenderer.PIXEL_SKIP_SIZE * MandelbrotRenderer.OFFSET_MULTIPLIER) / 2;

    for (let idx = 0; idx < MandelbrotRenderer.NUM_WORKERS; ++idx) {
      const worker = new MandelbrotWorker();

      worker.addEventListener("message", (event: MessageEvent<MandelbrotWorkerReturnPayload>) => {
        const mandelbrotData = event.data;
        if (mandelbrotData.isStable) {
          ctx.fillStyle = MandelbrotRenderer.FOREGROUND_COLOR_HEX;

          ctx.fillRect(
            mandelbrotData.row,
            mandelbrotData.col + OFFSET_SIZE,
            MandelbrotRenderer.PIXEL_CLUSTER_SIZE,
            MandelbrotRenderer.PIXEL_CLUSTER_SIZE
          );

          ctx.fillRect(
            mandelbrotData.row,
            canvasHeight - mandelbrotData.col - OFFSET_SIZE,
            MandelbrotRenderer.PIXEL_CLUSTER_SIZE,
            MandelbrotRenderer.PIXEL_CLUSTER_SIZE
          );
        }
      });

      worker.addEventListener("error", (event: ErrorEvent) => {
        if (event instanceof Event) {
          console.log("Error message received from worker: ", event);
        } else {
          console.log("Unexpected error: ", event);
        }
      });

      this.workers.push(worker);
    }

    for (
      let i = 0, halfHeight = Math.ceil(canvasHeight / 2);
      i < canvasWidth;
      i += MandelbrotRenderer.PIXEL_SKIP_SIZE
    ) {
      for (let j = 0; j <= halfHeight; j += MandelbrotRenderer.PIXEL_SKIP_SIZE) {
        const real = this.scaleReal(i, canvasWidth);
        const imag = this.scaleImag(j, canvasHeight);

        const payload: MandelbrotWorkerInjectPayload = {
          real: real,
          imag: imag,
          row: i,
          col: j,
        };

        this.workers[(i + j) % MandelbrotRenderer.NUM_WORKERS].postMessage(payload);
      }
    }
  }

  public release() {
    this.workers.forEach((worker) => worker.terminate());
  }
}

export { MandelbrotRenderer };
