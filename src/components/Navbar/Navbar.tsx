import React from "react";
import poke_logo from "../../assets/pokemon-logo.png";
// styles
import "./Navbar.css";
// react-router-dom
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

export const Navbar: React.FC = () => {
    return (
        <header className="nav">
            <Link to="/">
                <img src={poke_logo} alt="Pokémon Logo" />
            </Link>

            <div>
                <SearchBar />
            </div>
        </header>
    );
};
