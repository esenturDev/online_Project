/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Products {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		_id: number;
		productName: string;
		photoUrl: string;
		price: number;
		quantity: number;
	}[];

	type PostProductsResponse = {
		_id: number;
		productName: string;
		price: number;
		quantity: number;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		__v: string;
	}[];
	type PostProductsRequest = {
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
	};
}
