/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Products {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		_id: number;
		productName: string;
		photoUrl: string;
		price: string;
		quantity: string;
	}[];

	type PostProductsResponse = {
		_id: number;
		productName: string;
		price: string;
		quantity: string;
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
