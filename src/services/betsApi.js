import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "./api"


export const betsApi = createApi({
  reducerPath: 'betsApi',
  baseQuery: baseQuery,
  tagTypes: ['Bets'],
  endpoints: (build) => ({
    getBets: build.query({
      query: (page) => `bets?page=${page}&size=10&duration=3`,
      // Provides a list of `Bets` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Bets` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.items.map(({ id }) => ({ type: 'Bets', id })),
              { type: 'Bets', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Bets', id: 'LIST' }` is invalidated
            [{ type: 'Bets', id: 'LIST' }],
    }),
    
    getBet: build.query({
      query: (id) => `bets/${id}`,
      providesTags: (result, error, id) => [{ type: 'Bets', id }],
    }),

    createBet: build.mutation({
      query(body) {
        return {
          url: `bets`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all Bet-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created bet could show up in any lists.
      invalidatesTags: [{ type: 'Bets', id: 'LIST' }],
    }),

    updateBet: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `bets/${id}`,
          method: 'PATCH',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Bet `id` only.
      // In this case, `getBet` will be re-run. `getBets` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Bets', id }],
    }),

    deleteBet: build.mutation({
      query(id) {
        return {
          url: `bets/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Bet `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Bets', id }],
    }),

  }),
})

export const {
  useGetBetsQuery,
  useGetBetQuery,
  useCreateBetMutation,
  useUpdateBetMutation,
  useDeleteBetMutation,
} = betsApi