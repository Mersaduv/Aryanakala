export interface IProduct {
	id: string;
	slug: string;
	name: string;
	description: string;
	price: number;
	image: string;
	discount: number;
	categories: string[];
	inCart: boolean;
	count: number;
	rate: number;
	available: boolean;
	freeDelivery?: boolean;
	weight: string;
}