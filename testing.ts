import { writeFile } from "node:fs/promises";
import { makeGettingPicture } from "~/factories";

const service = makeGettingPicture();

await writeFile(
  "a.svg",
  await service.run({
    icons: ["typescript", "css"],
    iconsPerLine: 2,
    size: 64,
    spacing: 15,
    theme: "dark"
  })
);
