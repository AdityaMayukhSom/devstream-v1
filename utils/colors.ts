class Colors {
  public static random24BitColor(): string {
    return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
  }
}

export { Colors };
