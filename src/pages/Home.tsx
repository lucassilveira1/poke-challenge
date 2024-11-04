import React, { useState } from "react";
// hooks
import { useGetPokemonData } from "../hooks/useGetPokemonData";
// components
import { MiniCard } from "../components/Cards/MiniCard";
// styles
import "./Home.css";

export const Home: React.FC = () => {
    const [offset, setOffset] = useState<number>(0);
    const limit = 20;
    const { pokemonList, loading, error } = useGetPokemonData(offset, limit);

    if (loading) {
        return <p>Carregando...</p>;
    }
    if (error) {
        return <p>Erro ao carregar lista: {error}</p>;
    }

    const handleNext = () => {
        setOffset((prev) => prev + limit);
    };

    const handlePrevious = () => {
        setOffset((prev) => Math.max(prev - limit, 0));
    };

    return (
        <div className="container">
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
            <div className="counter">
                <button onClick={handlePrevious} disabled={offset === 0}>
                    Previous
                </button>
                <span>{offset / limit + 1}</span>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};
