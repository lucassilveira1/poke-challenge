// react
import React, { useState } from "react";
// react-icons
import { GoSearch } from "react-icons/go";
// react-router-dom
import { useNavigate } from "react-router-dom";
// styles
import "./SearchBar.css";
// hooks
import { useSuggestions } from "../../hooks/useSuggestions";

export const SearchBar: React.FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const suggestions = useSuggestions(inputValue);
    const navigate = useNavigate();
    const pokeTypes = [
        "normal",
        "fire",
        "water",
        "grass",
        "electric",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dark",
        "dragon",
        "steel",
        "fairy",
    ];
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (selectedType) {
            navigate(`/pokemon/type/${selectedType}`);
            setSelectedType("");
        } else if (inputValue.length > 0) {
            navigate(`/pokemon/filtered/${inputValue}`);
            setInputValue("");
        } else {
            navigate("/");
        }
    };

    const handleSuggestion = (name: string) => {
        navigate(`/pokemon/filtered/${name}`);
        setInputValue("");
    };
    return (
        <>
            <form className="searchbar">
                <input
                    type="text"
                    placeholder="Busque por Nome ou ID"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option>Buscar por tipo</option>
                    {pokeTypes.map((type) => (
                        <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </option>
                    ))}
                </select>
                <button type="submit" onClick={handleSubmit}>
                    <GoSearch />
                </button>
                {suggestions.length > 0 && (
                    <ul className="suggestions">
                        {suggestions.map((name) => (
                            <li
                                key={name}
                                onClick={() => handleSuggestion(name)}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </>
    );
};
