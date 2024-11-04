/* eslint-disable @typescript-eslint/no-unused-vars */
// imports
import { FC, useState } from "react";

// styles
import "./Card.css";
import { PokeTypeColors as Colors } from "../../interfaces/PokeTypeColors";

// react-icons
import { IoArrowBack } from "react-icons/io5";

// components
import { StatBar } from "../PokeStatBar/StatBar";
import { Link } from "react-router-dom";

// interface
interface PokemonProps {
    pokeId: number;
    pokeName: string;
    pokeImg: string;
    pokeShinyImg: string;
    pokeType: { slot: number; type: { name: string; url: string } }[];
    pokeStats: { base_stat: number; stat: { name: string; url: string } }[];
    pokeMoves: "";
}

export const Card: FC<PokemonProps> = (props: PokemonProps) => {
    return (
        <div className="card--cardcontainer">
            <div className="card--container">
                <div className="pokemon--Infos">
                    <Link to="/">
                        <p>
                            <IoArrowBack /> Voltar
                        </p>
                    </Link>
                    <div className="pokemon--img">
                        <img src={props.pokeImg} alt={props.pokeName} />
                    </div>
                    <div className="pokemon">
                        <span id="pokeName">{props.pokeName}</span>
                        <span>#6</span>
                        <span>
                            {props.pokeType.map((type, index) => {
                                const typeName = type.type.name;
                                const typeBackgroundColor =
                                    Colors[typeName as keyof typeof Colors] ||
                                    "transparent";

                                return (
                                    <Link key={index} to="/">
                                        <span
                                            style={{
                                                backgroundColor:
                                                    typeBackgroundColor,
                                                padding: "2px 5px",
                                                borderRadius: "5px",
                                                marginRight: "5px",
                                                color: "#212121",
                                            }}
                                        >
                                            {typeName}
                                        </span>
                                    </Link>
                                );
                            })}
                        </span>
                    </div>
                </div>
                <div className="pokemon--Stats">
                    <h4>Estatísticas:</h4>
                    {props.pokeStats.map((pokeStat, index) => (
                        <div key={index}>
                            <p>
                                {pokeStat.stat.name}:
                                <span>{pokeStat.base_stat}</span>
                            </p>
                            <StatBar
                                pokeStat={pokeStat.base_stat}
                                maxStat={100}
                            />
                        </div>
                    ))}
                </div>

                <div className="pokemon-abilities">
                    <h4>Habilidades:</h4>
                    <p>Flamethrower</p>
                    <p>Flame Burst</p>
                    <p>Ember</p>
                </div>
            </div>
        </div>
    );
};
