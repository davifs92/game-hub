import { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";

export interface Platform {
    name: string,
    id: number,
    slug: string,
}

export interface Game {
    id: number,
    name: string,
    released: string,
    rating: number,
    background_image: string,
    metacritic: number
    parent_platforms: { platform: Platform }[]
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}


const useGames = (gameQuery : GameQuery) => 
    useData<Game>('/games', {params: 
        {genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
    }}, 
        [gameQuery]);


export default useGames;