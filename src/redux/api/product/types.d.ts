/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Products {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		_id: number;
		productName: string;
		photoUrl: string;
		price: string;
		// __v: string;
		quantity: string;
		isFavorite: boolean;
		product: any
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
		// _id: number | string;
		_id: number;
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
		_id: number;
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
		// __v: string;
	};

	type EditProducRequest = {
		_id: number;
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
	};
	type EditProducResponse = {
		_id: number;
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		__v: string;
	}
}
