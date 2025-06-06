import { PictureProvider } from "~/providers/local-storage";
import { ListPictures } from "~/services/pictures";

export function makeListPictures(): ListPictures {
	const provider = new PictureProvider();
	return new ListPictures(provider);
}
