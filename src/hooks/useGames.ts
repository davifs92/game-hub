import { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";

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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform| null) => 
    useData<Game>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);


export default useGames;