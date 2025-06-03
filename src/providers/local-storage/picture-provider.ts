import process from "node:process";
import type { PictureProviderInterface } from "~/providers";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";

export class PictureProvider implements PictureProviderInterface {
	public pwd = process.env.PWD || "";

	async getPictures(...pictures: Array<string>): Promise<Array<string>> {
		const localPictures = pictures.map((picture) =>
			path.join(this.pwd, `data/${picture}.svg`),
		);

		return localPictures;
	}

	async getAll(): Promise<Array<string>> {
		let content: Array<string> = await readdir(path.join(this.pwd, "data"));

		content = content.map((item) => item.split(".")[0]);

		return content;
	}

	async exists(key: string): Promise<boolean> {
		return existsSync(path.join(this.pwd, `data/${key}.svg`));
	}
}
