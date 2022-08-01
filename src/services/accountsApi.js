import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "./api"


export const accountsApi = createApi({
  reducerPath: 'accountsApi',
  baseQuery: baseQuery,
  tagTypes: ['Accounts'],
  endpoints: (build) => ({
    getAccounts: build.query({
      query: (page) => `accounts?page=${page}&size=10`,
      // Provides a list of `Accounts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Accounts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.items.map(({ id }) => ({ type: 'Accounts', id })),
              { type: 'Accounts', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Accounts', id: 'LIST' }` is invalidated
            [{ type: 'Accounts', id: 'LIST' }],
    }),
    
    getAccount: build.query({
      query: (id) => `accountsAps/${id}`,
      providesTags: (result, error, id) => [{ type: 'Accounts', id }],
    }),

    createAccount: build.mutation({
      query(body) {
        return {
          url: `accountsAps`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all Account-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created accountsAp could show up in any lists.
      invalidatesTags: [{ type: 'Accounts', id: 'LIST' }],
    }),

    updateAccount: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `accountsAps/${id}`,
          method: 'PATCH',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Account `id` only.
      // In this case, `getAccount` will be re-run. `getAccounts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Accounts', id }],
    }),

    deleteAccount: build.mutation({
      query(id) {
        return {
          url: `accountsAps/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Account `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Accounts', id }],
    }),

  }),
})

export const {
  useGetAccountsQuery,
  useGetAccountQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
} = accountsApi