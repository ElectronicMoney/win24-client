import * as React from 'react'
import { useGetPostsQuery } from '../../services/postsApi'

export default function Posts() {
  // Using a query hook automatically fetches data and returns query values
  const { data:posts, error, isLoading, isSuccess } = useGetPostsQuery()
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  if (isSuccess) {
    console.log(posts)
  }


  return (
    <React.Fragment>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : posts ? (
            <div>
                {
                    posts.map((post) => (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body} </p>
                        </div>
                    ))

                    
                }
         
            </div>
        ) : null}
    </React.Fragment>
   
  )
}