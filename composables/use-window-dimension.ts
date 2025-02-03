export default function () {
  const d = useState<Dimension>("window-dimension", () => {
    return { height: 0, width: 0 };
  });

  const updateDimension = () => {
    d.value = {
      height: window.innerHeight,
      width: window.innerWidth,
    } satisfies Dimension;
  };

  onMounted(() => {
    window.addEventListener("resize", updateDimension);
    updateDimension();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateDimension);
  });

  return d;
}
