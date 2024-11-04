import React from "react";
import poke_logo from "../../assets/pokemon-logo.png";
// styles
import "./Navbar.css";
// react-icons
import { GoSearch } from "react-icons/go";
// react-router-dom
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <header className="nav">
            <Link to="/">
                <img src={poke_logo} alt="Poké Logo" />
            </Link>

            <div>
                <input type="text" placeholder="Pesquise por Nome ou ID" />{" "}
                <GoSearch />
            </div>
        </header>
    );
};
