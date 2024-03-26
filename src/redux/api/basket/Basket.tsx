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
		postBasket: build.mutation({
			query: (id) => ({
				url: `/basket/${id}`,
				method: "POST",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("tokenBasket")}`,
				},
			}),
			invalidatesTags: ["products"],
		}),
		patchBasket: build.mutation({
			query: ({id, newProduc}) => ({
				url: `/product-buy/${id}`,
				method: "PATCH",
				body: newProduc,
				// headers: {
				// 	Authorization: `Bearer ${localStorage.getItem("tokenBasket")}`,
				// },
				// body: quantity
			}),
			invalidatesTags: ["products"],
		}),
		patchBasketMinues: build.mutation({
			query: ({newProduct, id}) => ({
				url: `/product-buy/${id}`,
				method: "PATCH",
				body: newProduct
			}),
			invalidatesTags: ['products'],
		}),
		putPlues: build.mutation({
			query: ({ newProduc, id}) => ({
				url: `/product-buy/${id}`,
				method: "PATCH",
				body: newProduc
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetBasketQuery,
	usePostBasketMutation,
	usePatchBasketMutation,
	usePutPluesMutation,
	usePatchBasketMinuesMutation,
} = api;
