import { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import { CanceledError } from "axios";

export interface Game {
    id: number,
    name: string,
    released: string,
    rating: number,
    background_image: string,
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
   
    const apiClient = ApiClient;

  const controller = new AbortController();
   
    useEffect(() => {
       apiClient.get<FetchGameResponse>('/games', {signal: controller.signal})
       .then(res => setGames(res.data.results))
       .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message)
    })

    return () => {
        controller.abort();
      };
    }, []);

    return { games, error };
}

export default useGames;