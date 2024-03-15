import {api as index} from '../index';
const api = index.injectEndpoints({
  endpoints: (build) => ({
    postLoginUsers: build.mutation<AUTH.PostLoginResponse, AUTH.PostLoginRequest>({
      query: (checkUser) => ({
        url: '/login',
        method: 'POST',
        body: checkUser
      }),
      invalidatesTags: ['auth']
    }),
  })
})

export const {usePostLoginUsersMutation} = api