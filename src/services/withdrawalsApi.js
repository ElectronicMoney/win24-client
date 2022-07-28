import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "./api"


export const withdrawalsApi = createApi({
  reducerPath: 'withdrawalsApi',
  baseQuery: baseQuery,
  tagTypes: ['Withdrawals'],
  endpoints: (build) => ({
    getWithdrawals: build.query({
      query: (page) => `withdrawals?page=${page}&size=10`,
      // Provides a list of `Withdrawals` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Withdrawals` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.items.map(({ id }) => ({ type: 'Withdrawals', id })),
              { type: 'Withdrawals', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Withdrawals', id: 'LIST' }` is invalidated
            [{ type: 'Withdrawals', id: 'LIST' }],
    }),
    
    getWithdrawal: build.query({
      query: (id) => `withdrawals/${id}`,
      providesTags: (result, error, id) => [{ type: 'Withdrawals', id }],
    }),

    createWithdrawal: build.mutation({
      query(body) {
        return {
          url: `withdrawals`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all Withdrawal-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created withdrawal could show up in any lists.
      invalidatesTags: [{ type: 'Withdrawals', id: 'LIST' }],
    }),

    updateWithdrawal: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `withdrawals/${id}`,
          method: 'PATCH',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Withdrawal `id` only.
      // In this case, `getWithdrawal` will be re-run. `getWithdrawals` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Withdrawals', id }],
    }),

    deleteWithdrawal: build.mutation({
      query(id) {
        return {
          url: `withdrawals/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Withdrawal `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Withdrawals', id }],
    }),

  }),
})

export const {
  useGetWithdrawalsQuery,
  useGetWithdrawalQuery,
  useCreateWithdrawalMutation,
  useUpdateWithdrawalMutation,
  useDeleteWithdrawalMutation,
} = withdrawalsApi