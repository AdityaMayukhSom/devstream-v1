<script setup lang="ts">
const dimension = useWindowDimension();
const canvasRef = useTemplateRef("mandelbrot-canvas");
const renderer = new MandelbrotRenderer();

const updateCanvas = () => {
  let { width, height } = dimension.value;

  if (2 * width < 3 * height) {
    height = 0.66 * width;
  } else {
    width = 1.5 * height;
  }

  if (canvasRef.value) {
    renderer.draw(canvasRef.value, width, height);
  }
};

watch(() => dimension, updateCanvas, { deep: true });
onMounted(updateCanvas);
onBeforeUnmount(() => renderer.release());
</script>

<template>
  <canvas ref="mandelbrot-canvas" class="m-auto"></canvas>
</template>
