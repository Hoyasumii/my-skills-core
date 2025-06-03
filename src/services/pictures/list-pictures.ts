import type { PictureRepositoryInterface } from "~/providers";
import type { Service } from "~/services";

export class ListPictures
  implements Service<PictureRepositoryInterface, undefined, Array<string>>
{
  constructor(public repository: PictureRepositoryInterface) {}

  async run(_ = undefined): Promise<Array<string>> {
    return await this.repository.getAll();
  }
}
