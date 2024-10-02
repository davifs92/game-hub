import { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import { CanceledError } from "axios";
import useData from "./useData";

import genres from "../data/genres";

export interface Genre {
    id: number, 
    name: string,
    image_background: string
}



const useGenres = () => ({data : genres, isLoading: false, error: null})

export default useGenres;