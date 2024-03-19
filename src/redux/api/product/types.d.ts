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
		// _id: number;
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
	};

	type PatchProducRequest = {
		_id: number | string;
		quantity: string | number;
		// quantityToDecrease: string | number
	};

	type PatchProducResponse = {
		_id: number | string;
		quantity: string | number;
		// quantityToDecrease: string | number;
	}[]

	type GetProducRequest = string;
	type GetProducResponse = {
		_id: string | number;
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
		__v: string;
	};
}
