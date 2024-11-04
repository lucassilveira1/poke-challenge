import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonDetail } from "../interfaces/pokemon";

export const useGetPokemonById = () => {
    const { id } = useParams<{ id: string }>();
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
        null
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`);
                }
                const data = await response.json();
                setPokemonDetail(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(`Erro ao carregar dados: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchPokemonDetail();
    }, [id]);

    return { pokemonDetail, loading, error };
};
