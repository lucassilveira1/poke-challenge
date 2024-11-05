// react
import React, { useState } from "react";
// react-icons
import { GoSearch } from "react-icons/go";
// react-router-dom
import { useNavigate } from "react-router-dom";

export const SearchBar: React.FC = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue.length > 0) {
            navigate(`/pokemon/filtered/${inputValue}`);
            setInputValue("");
        } else {
            navigate("/");
        }
    };
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Busque por Nome ou ID"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                    <GoSearch />
                </button>
            </form>
        </>
    );
};
