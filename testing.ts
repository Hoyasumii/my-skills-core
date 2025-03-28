import { writeFile } from "fs/promises";
import { makeGettingPicture } from "~/generators";

const service = makeGettingPicture();

await writeFile(
  "a.svg",
  await service.run({
    icons: "typescript,css",
  })
);
