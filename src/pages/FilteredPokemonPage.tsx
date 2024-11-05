// react
import React from "react";
// components
import { MiniCard } from "../components/Cards/MiniCard";
import { GoBack } from "../components/GoBack";
// hooks
import { useGetPokemonById } from "../hooks/useGetPokemonById";
// styles
import "./FilteredPage.css";
export const FilteredPokemonPage: React.FC = () => {
    const { pokemonDetail: pokemon, loading, error } = useGetPokemonById();

    if (loading) {
        return <p>Carregando...</p>;
    }
    if (error) {
        return <p>Erro{error}</p>;
    }
    if (!pokemon) {
        return <p>Pokemón não encontrado</p>;
    }

    return (
        <div>
            <GoBack />
            <div className="minicard">
                <MiniCard
                    pokeId={pokemon.id}
                    pokeImg={pokemon.sprites.front_default}
                    pokeName={pokemon.name}
                    pokeType={pokemon.types}
                />
            </div>
        </div>
    );
};
