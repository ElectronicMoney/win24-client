import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "./api"


export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: baseQuery,
  tagTypes: ['Games'],
  endpoints: (build) => ({
    getGames: build.query({
      query: (page) => `games?page=${page}&size=10&duration=3`,
      // Provides a list of `Games` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Games` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.items.map(({ id }) => ({ type: 'Games', id })),
              { type: 'Games', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Games', id: 'LIST' }` is invalidated
            [{ type: 'Games', id: 'LIST' }],
    }),
    
    getGame: build.query({
      query: (id) => `games/${id}`,
      providesTags: (result, error, id) => [{ type: 'Games', id }],
    }),

    createGame: build.mutation({
      query(body) {
        return {
          url: `games`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all Game-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created game could show up in any lists.
      invalidatesTags: [{ type: 'Games', id: 'LIST' }],
    }),

    updateGame: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `games/${id}`,
          method: 'PATCH',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Game `id` only.
      // In this case, `getGame` will be re-run. `getGames` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Games', id }],
    }),

    deleteGame: build.mutation({
      query(id) {
        return {
          url: `games/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Game `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Games', id }],
    }),

  }),
})

export const {
  useGetGamesQuery,
  useGetGameQuery,
  useCreateGameMutation,
  useUpdateGameMutation,
  useDeleteGameMutation,
} = gamesApi