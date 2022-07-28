import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "./api"


export const rechargesApi = createApi({
  reducerPath: 'rechargesApi',
  baseQuery: baseQuery,
  tagTypes: ['Recharges'],
  endpoints: (build) => ({
    getRecharges: build.query({
      query: (page) => `recharges?page=${page}&size=10`,
      // Provides a list of `Recharges` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Recharges` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.items.map(({ id }) => ({ type: 'Recharges', id })),
              { type: 'Recharges', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Recharges', id: 'LIST' }` is invalidated
            [{ type: 'Recharges', id: 'LIST' }],
    }),
    
    getRecharge: build.query({
      query: (id) => `recharges/${id}`,
      providesTags: (result, error, id) => [{ type: 'Recharges', id }],
    }),

    createRecharge: build.mutation({
      query(body) {
        return {
          url: `recharges`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all Recharge-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created recharge could show up in any lists.
      invalidatesTags: [{ type: 'Recharges', id: 'LIST' }],
    }),

    updateRecharge: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `recharges/${id}`,
          method: 'PATCH',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Recharge `id` only.
      // In this case, `getRecharge` will be re-run. `getRecharges` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Recharges', id }],
    }),

    deleteRecharge: build.mutation({
      query(id) {
        return {
          url: `recharges/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Recharge `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Recharges', id }],
    }),

  }),
})

export const {
  useGetRechargesQuery,
  useGetRechargeQuery,
  useCreateRechargeMutation,
  useUpdateRechargeMutation,
  useDeleteRechargeMutation,
} = rechargesApi