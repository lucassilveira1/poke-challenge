/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Pokemon {
    name: string;
    url: string;
}

export interface PokeStats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface PokeMoves {
    move: {
        name: string;
        url: string;
    };
}

export interface PokeTypes {
    [x: string]: any;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    };
}

export interface PokemonDetail {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        front_shiny: string;
    };
    types: PokeTypes[];
    stats: PokeStats[];
    moves: PokeMoves[];
}

export interface PokeApiResponse {
    results: Pokemon[];
}
