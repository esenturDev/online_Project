import { api as index } from "../index";
const api = index.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query<AUTH.GetUsersResponse, AUTH.GetUsersRequest>({
			query: () => ({
				url: "/users",
				method: "GET",
			}),
			providesTags: ["auth"],
		}),
		postLoginUsers: build.mutation<
			AUTH.PostLoginResponse,
			AUTH.PostLoginRequest
		>({
			query: ({ email, password }) => ({
				url: "/login",
				method: "POST",
				body: { email, password },
			}),
			invalidatesTags: ["auth"],
		}),
		postRegisterUsers: build.mutation<
			AUTH.PostRegistrResponse,
			AUTH.PostRegistrRequest
		>({
			query: ({ email, userName, password }) => ({
				url: "/users",
				method: "POST",
				body: { email, userName, password },
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const {
	usePostLoginUsersMutation,
	usePostRegisterUsersMutation,
	useGetUsersQuery,
} = api;
