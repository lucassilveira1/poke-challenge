import { FC } from "react";

// style
import "./Minicard.css";

// router
import { Link } from "react-router-dom";
import { PokeTypes } from "../../interfaces/pokemon";

// interfaces
interface PokemonProps {
    pokeName: string;
    pokeImg: string;
    pokeType: PokeTypes[];
    pokeId: number;
}

export const MiniCard: FC<PokemonProps> = (props: PokemonProps) => {
    const typeNames = props.pokeType
        .map((typeObj) => typeObj.type.name)
        .join(", ");

    return (
        <Link to={`/pokemon/${props.pokeId}`}>
            <div className="card">
                <span className="card--id">#{props.pokeId}</span>
                <img
                    className="card--image"
                    src={props.pokeImg}
                    alt={props.pokeName}
                />
                <h1 className="card--name">{props.pokeName}</h1>
                <span className="card--details">{typeNames}</span>
            </div>
        </Link>
    );
};
