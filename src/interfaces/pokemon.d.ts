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
    power?: number;
    accuracy: number;
}

export interface PokemonDetail {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        front_shiny: string;
    };
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    stats: PokeStats[];
    moves: PokeMoves[];
}

export interface PokeApiResponse {
    results: Pokemon[];
}
