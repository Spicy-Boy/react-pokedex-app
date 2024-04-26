import React, {useState} from 'react';
import useFetch from '../hooks/useFetch';

function SelectPokemonForm()
{
    //base url for repo of pokemon PC icons!
    let baseIconUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/";

    //the poke list goes up to 493, the Sinnoh Dex
    const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/?limit=493";
    const [pokemonList, isLoading] = useFetch(pokemonListUrl);
    
    const arrayOfIconLinks = [];

    for (let i = 0; i < pokemonList.length; i++)
    {
        arrayOfIconLinks += baseIconUrl+i+".png";
    }

    if (isLoading)
    {
        return(
            <h1>LOADING!!!!</h1>
        );
    }
    else
    {
        return(
            <>
                {JSON.stringify(pokemonList)}
            </>
        );
    }

}

export default SelectPokemonForm;