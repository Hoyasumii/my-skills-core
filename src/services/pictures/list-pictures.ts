import type { PictureProviderInterface } from "~/providers";
import type { Service } from "~/services";

export class ListPictures
  implements Service<PictureProviderInterface, undefined, Array<string>>
{
  constructor(public provider: PictureProviderInterface) {}

  async run(_ = undefined): Promise<Array<string>> {
    return await this.provider.getAll();
  }
}
