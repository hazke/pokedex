import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
    // State variables to hold Pokemon data
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [pageNumber, setPageNumber] = useState(1);

    // State variables to handle pagination
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")  // retrieved from https://pokeapi.co/
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    // Function to retrieve Pokemon data from PokeAPI

    // const pokeFun = async () => {
    //     setLoading(true);
    //     const limit = 20;
    //     const offset = (pageNumber - 1) * limit; // Replace pageNumber with the current page number
    //     const res = await axios.get(`${url}?limit=${limit}&offset=${offset}`);
    //     setNextUrl(res.data.next);
    //     setPrevUrl(res.data.previous);
    //     getPokemon(res.data.results);
    //     setLoading(false);
    // };


    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }

    // Function to retrieve individual Pokemon data
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }

    // Call pokeFun() on initial render and whenever the url state changes
    useEffect(() => {
        pokeFun();
    }, [url])


    // useEffect(() => {
    //     pokeFun();
    // }, [url, pokeFun]);


    return (
        <>
            <div className="container">

                {/* Display Pokemon cards and handle pagination */}
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />

                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>

                {/* Display details for selected Pokemon */}
                <div className="right-content">
                    <h1>Pokemon Details:</h1>
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>
        </>
    )
}
export default Main;