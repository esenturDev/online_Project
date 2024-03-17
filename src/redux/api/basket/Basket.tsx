import { api as index } from "../index";

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBasket: build.query<
			Products.GetProductsResponse,
			Products.GetProductsRequest
		>({
			query: () => ({
				url: "/basket",
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("tokenBasket")}`,
				},
			}),
			providesTags: ["products"],
		}),
		postBasket: build.mutation<
			Products.PostProductsResponse,
			Products.PostProductsRequest
		>({
			query: (_id) => ({
				url: `/basket/${_id}`,
				method: "POST",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("tokenBasket")}`,
				},
			}),
			invalidatesTags: ["products"],
		}),
		patchBasket: build.mutation<
			Products.PostProductsResponse,
			Products.PostProductsRequest
		>({
			query: ( _id, quantity ) => ({
				url: `/product-buy/${_id}`,
				method: "PATCH",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("tokenBasket")}`,
				},
				// body: quantity
				body: { quantity },
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetBasketQuery,
	usePostBasketMutation,
	usePatchBasketMutation,
} = api;
