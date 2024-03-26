/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Favorite {
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