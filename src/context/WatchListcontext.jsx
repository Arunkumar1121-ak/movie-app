import { createContext, useEffect, useState } from "react";
import Watchlist from "../pages/Watchlist";

export const watchListcontext = createContext();

export const WatchListprovider = ({ children }) => {
    const [Watchlist, setWatchlist] = useState([]);
    const [genrelist, setgenrelist] = useState([]);


    useEffect(() => {

        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=55dd39a670ba91221bdb0502323f7efc`


        fetch(url)
            .then((response) => response.json())
            .then((data) => setgenrelist(data.genres || []));
    }, []);

    const togglewatchlist = (movie) => {
        const index = Watchlist.findIndex((m) => m.id === movie.id);
        if (index === -1) {
            setWatchlist([...Watchlist, movie])
        } else {
            setWatchlist([...Watchlist.slice(0, index), ...Watchlist.slice(index + 1)

            ])
        }
    }

    return (
        <watchListcontext.Provider value={{ Watchlist, togglewatchlist, genrelist }}>{children}</watchListcontext.Provider>
    )
}