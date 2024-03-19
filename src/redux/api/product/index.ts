import { api as index } from "../index";

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			Products.GetProductsResponse,
			Products.GetProductsRequest
		>({
			query: () => ({
				url: "products",
				method: "GET",
			}),
			providesTags: ["products"],
		}),
		postProducts: build.mutation<
			Products.PostProductsResponse,
			Products.PostProductsRequest
		>({
			query: ({ productName, price, quantity, photoUrl }) => ({
				url: "products",
				method: "POST",
				body: { productName, price, quantity, photoUrl },
			}),
			invalidatesTags: ["products"],
		}),
		deleteProducts: build.mutation({
			query: (_id) => ({
				url: `products/${_id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["products"],
		}),
		editProducts: build.mutation<
			Products.PostProductsResponse,
			Products.PostProductsRequest
		>({
			query: ({ productName, price, quantity, photoUrl, _id }) => ({
				url: `products/${_id}`,
				method: "PATCH",
				body: { productName, price, quantity, photoUrl },
			}),
			invalidatesTags: ["products"],
		}),
		getItenIdProduc: build.query<
			Products.GetProducResponse,
			Products.GetProducRequest
		>({
			query: (_id) => ({
				url: `products/${_id}`,
				method: "GET",
			}),
			providesTags: ["products"],
		}),
		editProduc: build.mutation<
			Products.EditProducResponse,
			Products.EditProducRequest
		>({
			query: ({ _id, productName, price, quantity, photoUrl }) => ({
				url: `products/${_id}`,
				method: "PUT",
				body: { productName, price, quantity, photoUrl },
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetProductsQuery,
	usePostProductsMutation,
	useDeleteProductsMutation,
	useEditProductsMutation,
	useGetItenIdProducQuery,
	useEditProducMutation,
} = api;
