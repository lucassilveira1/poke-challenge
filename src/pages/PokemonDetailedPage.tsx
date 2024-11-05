import React from "react";
import { useGetPokemonById } from "../hooks/useGetPokemonById";
import { Card } from "../components/Cards/Card";

export const PokemonDetailedPage: React.FC = () => {
    const { pokemonDetail, loading, error } = useGetPokemonById();

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro ao carregar dados: {error}</p>;
    }

    return (
        <>
            {pokemonDetail && (
                <Card
                    pokeId={pokemonDetail.id}
                    pokeName={pokemonDetail.name}
                    pokeImg={pokemonDetail.sprites.front_default}
                    pokeShinyImg={pokemonDetail.sprites.front_shiny}
                    pokeType={pokemonDetail.types}
                    pokeStats={pokemonDetail.stats}
                    pokeMoves={pokemonDetail.moves}
                />
            )}
        </>
    );
};
