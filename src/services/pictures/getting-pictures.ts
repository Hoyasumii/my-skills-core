import type { Service } from "~/services";
import type { GetPictureInterface } from "~/types/pictures";
import type { PictureRepositoryInterface } from "~/repositories";
import { GetPictureModel } from "~/models/pictures";
import { processPicture } from "~/utils";

export class GettingPictures
  implements Service<PictureRepositoryInterface, GetPictureInterface, string>
{
  constructor(public repository: PictureRepositoryInterface) {}

  async run(args: GetPictureInterface) {
    const { data, success } = GetPictureModel.safeParse(args);

    if (!success) return "";

    const { iconsPerLine, size, spacing } = data;
    let { icons } = data;

    const pictures: Array<string> = [];

    if (icons[0] === "all") icons = await this.repository.getAll();

    icons = await this.repository.getPictures(...icons);

    for (const picture of icons) {
      const pictureExists = await this.repository.exists(picture);

      if (!pictureExists) continue;

      pictures.push(picture);
    }

    // console.log(processPicture(pictures, iconsPerLine, size, spacing));

    const { content, height, width } = processPicture(
      pictures,
      iconsPerLine,
      size,
      spacing
    );

    // console.log(content);

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">${content.join(
      "\n"
    )}</svg>`;

    for (const picture of icons) {
      // const selectedTheme = theme === "dark" ? "#1f2937" : "#e5e7eb";

      const pictureExists = await this.repository.exists(picture);

      // const background = `<svg width="512" height="512">
      //   <rect x="0" y="0" width="512" height="512" rx="50" ry="50" fill="${selectedTheme}"/>
      // </svg>`;

      if (!pictureExists) continue;

      // const resizedImage = await sharp(Buffer.from(picture))
      //   .resize(size, size)
      //   .toBuffer();

      // pictures.push(
      //   await sharp(Buffer.from(background))
      //     .resize(size, size)
      //     .composite([
      //       {
      //         input: resizedImage,
      //         blend: "over",
      //       },
      //     ])
      //     .toBuffer()
      // );
    }

    // const {
    //   content: compositeicons,
    //   height,
    //   width,
    // } = processPicture(pictures, iconsPerLine, size, spacing);

    // return await sharp({
    //   create: {
    //     width,
    //     height,
    //     channels: 4,
    //     background: { alpha: 0, r: 255, g: 255, b: 255 },
    //   },
    // })
    //   .composite(compositeicons)
    //   .toFormat("webp", {
    //     quality: 100,
    //     lossless: true,
    //     nearLossless: true,
    //   })
    //   .toBuffer();
  }
}
