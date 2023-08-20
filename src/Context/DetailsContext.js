import axios from "axios";
import { createContext } from "react";

export let DetailsContext = createContext()

export function DetailsContextProvider(props) {

    async function getMyMovies(id) {

        return axios.get(`https://api.themoviedb.org/3/movie/${603692}?language=en-US`, {
            movieId: id
        }, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcyZGQ1ZmQyY2M1MmIwMmQzYmYzNjI2MGQ1ODAyOSIsInN1YiI6IjY0MmNhZDZlMGQyZjUzMDA3NzhjZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4Kfy0uZu4ruZWfGibUo-0fAvpSyJN2mH5CYRhxht04'
            }
        }).then((response) => response).catch((err) => err);

    }

    return <>
        <DetailsContext.Provider value={{ getMyMovies }}>
            {props.children}
        </DetailsContext.Provider>
    </>
}