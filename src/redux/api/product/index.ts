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
			invalidatesTags: ['products'],
		})
	}),
});

export const { useGetProductsQuery, usePostProductsMutation, useDeleteProductsMutation } = api;
