export interface PictureProviderInterface {
	getPictures(...pictures: Array<string>): Promise<Array<string>>;
	getAll(): Promise<Array<string>>;
	exists(key: string): Promise<boolean>;
}
