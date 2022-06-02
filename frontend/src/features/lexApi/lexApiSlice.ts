import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const lexApi = createApi({
    reducerPath: 'lexApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://null.turbo-lex.pl/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            // query: (name) => `res/${name}`,
            query() {
                return `doc/73470228`
            }
        }),
    }),

    // baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    // endpoints: (builder) => ({
    //     getPokemonByName: builder.query({
    //         query: (name) => `pokemon/${name}`,
    //     }),
    // }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = lexApi