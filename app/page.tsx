'use client'

import { useEffect, useRef } from "react"

class Complex {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Mandelbrot {
  private static MAX_ITERATION = 50
  private static PIXEL_SKIP_SIZE = 6
  private static PIXEL_CLUSTER_SIZE = 3

  private static BACKGROUND_COLOR_HEX = '#fda403'
  private static FOREGROUND_COLOR_HEX = '#fff'

  private static REAL_SET = { "start": -2, "end": 1 }
  private static IMAG_SET = { "start": -1, "end": 1 }


  private generateRandom24BitColor() {
    return `#${((1 << 24) * Math.random() | 0).toString(16)}`
  }

  private isStable(real: number, imag: number, maxIteration: number = Mandelbrot.MAX_ITERATION): boolean {
    const c = new Complex(real, imag)
    const z = new Complex(0, 0)
    const z2pc = new Complex(0, 0)
    for (let index = 0, dist = 0; index < maxIteration; index++) {
      z2pc.x = (z.x * z.x) - (z.y * z.y) + c.x
      z2pc.y = 2 * z.x * z.y + c.y
      z.x = z2pc.x
      z.y = z2pc.y
      dist = z.x * z.x + z.y * z.y
      if (dist > 4) {
        return false
      }
    }
    return true
  }

  public draw(canvas: HTMLCanvasElement, canvasHeight: number = 400, canvasWidth: number = 600) {
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      console.error("could not find context to draw mandelbrot plot")
      return
    }

    ctx.canvas.width = canvasWidth
    ctx.canvas.height = canvasHeight

    for (let i = 0, halfCanvasHeight = Math.ceil(canvasHeight / 2); i < canvasWidth; i += Mandelbrot.PIXEL_SKIP_SIZE) {
      for (let j = 0; j <= halfCanvasHeight; j += Mandelbrot.PIXEL_SKIP_SIZE) {
        const real = Mandelbrot.REAL_SET.start + (i * (Mandelbrot.REAL_SET.end - Mandelbrot.REAL_SET.start)) / canvasWidth
        const imag = Mandelbrot.IMAG_SET.start + (j * (Mandelbrot.IMAG_SET.end - Mandelbrot.IMAG_SET.start)) / canvasHeight
        const inMandelbrot = this.isStable(real, imag)
        ctx.fillStyle = inMandelbrot ? Mandelbrot.BACKGROUND_COLOR_HEX : Mandelbrot.FOREGROUND_COLOR_HEX
        ctx.fillRect(i, j, Mandelbrot.PIXEL_CLUSTER_SIZE, Mandelbrot.PIXEL_CLUSTER_SIZE)
        ctx.fillRect(i, canvasHeight - j, Mandelbrot.PIXEL_CLUSTER_SIZE, Mandelbrot.PIXEL_CLUSTER_SIZE)
      }
    }
  }
}


export default function Home() {
  const mandelbrotCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (mandelbrotCanvasRef.current) {
      const mandelbrot = new Mandelbrot()
      mandelbrot.draw(mandelbrotCanvasRef.current, window.innerHeight, window.innerWidth * 0.85)
    }
  }, [])

  return (
    <main className="">
      <canvas ref={mandelbrotCanvasRef} className="m-auto" />
    </main>
  );
}
