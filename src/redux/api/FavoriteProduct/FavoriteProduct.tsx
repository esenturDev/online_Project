import { api as index } from "../index";

// interface ProducRequest {
// 	_id: number;
// }

// interface ProducResponse {
// 	_id: number;
// 	productName: string;
// 	photoUrl: string;
// 	price: string;
// 	quantity: string;
// }

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducFavorite: build.query<Products.GetProductsResponse, Products.GetProductsRequest>({
			query: () => ({
				url: "favorites-products",
				headers: { Authorization: `Bearer ${localStorage.getItem("tokenBasket")}` },
				method: "GET",
			}),
			providesTags: ["products"],
		}),
		postProducFavorite: build.mutation<Products.PostProductsResponse, Products.PostProductsRequest>({
			query: (_id) => ({
				url: `favorites-products/${_id}`,
				method: "POST",
				// body: _id,
				headers: { Authorization: `Bearer ${localStorage.getItem("tokenBasket")}` },
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const { useGetProducFavoriteQuery, usePostProducFavoriteMutation } = api;
