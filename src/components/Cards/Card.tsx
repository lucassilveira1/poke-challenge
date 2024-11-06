// imports
import { FC } from "react";

// styles
import "./Card.css";
import { PokeTypeColors as Colors } from "../../interfaces/PokeTypeColors";

// components
import { StatBar } from "../PokeStatBar/StatBar";
import { Link } from "react-router-dom";
import { PokeMoves, PokeStats, PokeTypes } from "../../interfaces/pokemon";
import { GoBack } from "../GoBack";

// interface
interface PokemonProps {
    pokeId: number;
    pokeName: string;
    pokeImg: string;
    pokeShinyImg: string;
    pokeType: PokeTypes[];
    pokeStats: PokeStats[];
    pokeMoves: PokeMoves[];
}

export const Card: FC<PokemonProps> = (props: PokemonProps) => {
    return (
        <div className="pokemon--card">
            <div className="card--container">
                <div className="pokemon--Infos">
                    <GoBack />
                    <div className="pokemon--img">
                        <img src={props.pokeImg} alt={props.pokeName} />
                    </div>
                    <div className="pokemon">
                        <span id="pokeName">{props.pokeName}</span>
                        <p id="hashtag">
                            #<span>{props.pokeId}</span>
                        </p>
                        <span>
                            {props.pokeType.map((type, index) => {
                                const typeName = type.type.name;
                                const typeBackgroundColor =
                                    Colors[typeName as keyof typeof Colors] ||
                                    "transparent";

                                return (
                                    <Link
                                        key={index}
                                        to={`/pokemon/type/${typeName}`}
                                    >
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
                <div className="pokemon--stats-section">
                    <h3>Estatísticas:</h3>
                    <div className="pokemon--Stats">
                        {props.pokeStats.map((pokeStat, index) => (
                            <div key={index}>
                                <p>
                                    {pokeStat.stat.name}:
                                    <span> {pokeStat.base_stat}</span>
                                </p>
                                <StatBar
                                    pokeStat={pokeStat.base_stat}
                                    maxStat={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pokemon-moves-section">
                    <h3>Habilidades:</h3>
                    <div className="pokemon-abilities">
                        {props.pokeMoves && props.pokeMoves.length > 0 ? (
                            props.pokeMoves.slice(0, 8).map((move, index) => (
                                <div key={index}>
                                    <p>{move.move.name}</p>
                                </div>
                            ))
                        ) : (
                            <p>Habilidades não disponível.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
