// react-hooks
import { useEffect, useState } from "react";
// interfaces
import { Pokemon, PokemonDetail, PokeApiResponse } from "../interfaces/pokemon";

export const useGetPokemonData = (offset: number, limit: number) => {
    const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const [pokemonList, setPokemonList] = useState<PokemonDetail[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokeList = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`);
                }

                const data: PokeApiResponse = await response.json();
                const basicPokemonList: Pokemon[] = data.results;

                const detailedPokeList = await Promise.all(
                    basicPokemonList.map(async (pokemon) => {
                        const detailResponse = await fetch(pokemon.url);

                        if (!detailResponse.ok) {
                            throw new Error(`Erro: ${detailResponse.status}`);
                        }
                        return (await detailResponse.json()) as PokemonDetail;
                    })
                );

                setPokemonList(detailedPokeList);
            } catch (error) {
                if (error instanceof Error) {
                    setError(`Erro ao tentar carregar dados: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchPokeList();
    }, [API_URL, offset, limit]);

    return { pokemonList, loading, error };
};
