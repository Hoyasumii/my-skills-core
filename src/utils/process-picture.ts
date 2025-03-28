type ProcessPictureBufferReturn = {
  width: number;
  height: number;
  content: Array<string>;
};

export function processPicture(
  pictures: Array<string>,
  iconsPerLine: number,
  size: number,
  spacing: number
): ProcessPictureBufferReturn {
  const iconsColleciton: Array<string> = [];

  const baseWidth =
    pictures.length > iconsPerLine ? iconsPerLine : pictures.length;

  const totalRows = Math.ceil(pictures.length / iconsPerLine);
  const width = baseWidth * size + (baseWidth - 1) * spacing;
  const height = totalRows * size + (totalRows - 1) * spacing;

  pictures.forEach((picture, index) => {
    const row = Math.floor(index / iconsPerLine);
    const col = index % iconsPerLine;

    const x = row * (size + spacing);
    const y = col * (size + spacing);

    // iconsColleciton.push({
    //   input: picture,
    //   top: x,
    //   left: y,
    // });

    iconsColleciton.push(`<g transform="translate(${x}, ${y})">${picture}</g>`);
  });

  return {
    content: iconsColleciton,
    width,
    height,
  };
}
