// react
import React from "react";
// react-router-dom
import { Link, useParams } from "react-router-dom";
// Components
import { MiniCard } from "../components/Cards/MiniCard";
import { GoBack } from "../components/GoBack";
// hooks
import { useGetPokemonByType } from "../hooks/useGetPokemonByType";
// style

export const FilteredTypePokemonPage: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const { pokemonList, loading, error } = useGetPokemonByType();

    if (loading) {
        return <p>Carregando...</p>;
    }
    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div className="container">
            <div className="header">
                <GoBack />
                <h1>
                    Pokémon do tipo: <span>{type}</span>
                </h1>
            </div>
            {pokemonList.map((pokemon) => (
                <div className="pokemon--list" key={pokemon.id}>
                    <MiniCard
                        pokeId={pokemon.id}
                        pokeImg={pokemon.sprites.front_default}
                        pokeName={pokemon.name}
                        pokeType={pokemon.types}
                    />
                </div>
            ))}
        </div>
    );
};
