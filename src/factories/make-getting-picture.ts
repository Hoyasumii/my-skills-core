import { PictureProvider } from "~/providers/local-storage";
import { GettingPictures } from "~/services/pictures";

export function makeGettingPicture(): GettingPictures {
	const provider = new PictureProvider();
	return new GettingPictures(provider);
}
