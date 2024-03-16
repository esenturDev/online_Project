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
    postRegisterUsers: build.mutation<AUTH.PostRegistrResponse, AUTH.PostRegistrRequest>({
      query: ({email, userName, password}) => ({
        url: '/users',
        method: 'POST',
        body: {email, userName, password},
      }),
      invalidatesTags: ['auth']
    })
  })
})

export const {usePostLoginUsersMutation, usePostRegisterUsersMutation} = api