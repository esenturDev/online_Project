/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BasketProduc {
  type PutProducPluesRequest = {
    _id: number | string;
    quantity: string;
  }

  type PutProducPluesResponse = {
    _id: number | string;
    quantity: string;
  }[];

  type PutProducMinuesRequest = {
    _id: number | string;
    quantity: string;
  }

  type PutProducMinuesResponse = {
    _id: number | string;
    quantity: string;
  }[];
  type PostFavoriteResponse = {
		_id: number;
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		__v: string;
	}[];
	type PostFavoriteRequest = {
		// _id: number | string;
		_id: number;
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
	};
}