import React, {useState} from 'react';
import useFetch from '../hooks/useFetch';

function SelectPokemonForm({ pokemonList, isLoading })
{
    //base url for repo of pokemon PC icons!
    let baseIconUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/";

    const arrayOfIconLinks = [];
    if (pokemonList)
    {
        for (let i = 1; i <= pokemonList.results.length; i++)
        {
            arrayOfIconLinks.push(baseIconUrl+i+".png");
        }
    }

    if (isLoading)
    {
        return(
            <h4>Loading...</h4>
        );
    }
    else if (pokemonList)
    {
        return(
            <>
                {arrayOfIconLinks.map((link)=>{
                    return(
                        <img src={link} />
                    )
                })}
            </>
        );
    }

}

export default SelectPokemonForm;