import { useEffect, useState } from "react";
import ApiClient from "../service/ApiClient";
import { CanceledError } from "axios";
import useData from "./useData";

interface Genre {
    id: number, 
    name: string,
    image_background: string
}



const useGenres = () => useData<Genre>('/genres');

export default useGenres;