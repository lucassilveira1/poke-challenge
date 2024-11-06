// react
import { useState, useEffect } from "react";

export const useSuggestions = (query: string) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [pokeList, setPokeList] = useState<string[]>([]);

    useEffect(() => {
        const getPokeList = async () => {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=1030"
            );
            const data = await response.json();
            setPokeList(
                data.results.map((pokemon: { name: string }) => pokemon.name)
            );
        };
        getPokeList();
    }, []);

    useEffect(() => {
        if (query) {
            const filteredSuggestions = pokeList.filter((name) =>
                name.toLowerCase().startsWith(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions.slice(0, 10));
        } else {
            setSuggestions([]);
        }
    }, [query, pokeList]);

    return suggestions;
};
