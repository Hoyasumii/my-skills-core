import { PictureProvider } from "~/providers/local-storage";
import { GettingPictures } from "~/services/pictures";

export function makeGettingPicture(): GettingPictures {
	const repository = new PictureProvider();
	return new GettingPictures(repository);
}
