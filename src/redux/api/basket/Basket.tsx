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
        headers: { Authorization: `Bearer ${localStorage.getItem("tokenBasket")}` },
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
        headers: { Authorization: `Bearer ${localStorage.getItem("tokenBasket")}` },
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {useGetBasketQuery, usePostBasketMutation} = api