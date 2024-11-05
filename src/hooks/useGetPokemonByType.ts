/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
// interface
import { PokemonDetail, Pokemon } from "../interfaces/pokemon";
// react-router-dom
import { useParams } from "react-router-dom";

export const useGetPokemonByType = () => {
    const { type } = useParams<{ type: string }>();
    const [pokemonList, setPokemonList] = useState<PokemonDetail[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPokemonByType = async () => {
            setLoading(true);

            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/type/${type}`
                );
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`);
                }
                const data = await response.json();
                const pokemons: Pokemon[] = data.pokemon.map(
                    (p: any) => p.pokemon
                );
                const pokeTypeList = await Promise.all(
                    pokemons.map(async (poke) => {
                        const typedPokeResponse = await fetch(poke.url);
                        if (!typedPokeResponse.ok) {
                            throw new Error(
                                `Erro: ${typedPokeResponse.status}`
                            );
                        }
                        return (await typedPokeResponse.json()) as PokemonDetail;
                    })
                );

                setPokemonList(pokeTypeList);
            } catch (error) {
                if (error instanceof Error) {
                    setError(`Erro: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        getPokemonByType();
    }, [type]);

    return { pokemonList, loading, error };
};
