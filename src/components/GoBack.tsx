// react
import React from "react";
// react-icons
import { IoArrowBack } from "react-icons/io5";
// react-router-dom
import { Link } from "react-router-dom";

export const GoBack: React.FC = () => {
    return (
        <div>
            <Link to={"/"}>
                <p>{<IoArrowBack />} Voltar</p>
            </Link>
        </div>
    );
};
