import React, {useState} from 'react';
import useAxios from '../hooks/useAxios';

function SelectPokemonForm({ selectedPokemon, pokemonList, isLoading })
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

    const [setUrl, data, loading, setLoading, error] = useAxios();

    //pokemon 
    let specificPokemonUrl = "https://pokeapi.co/api/v2/pokemon-species/";
    function getSelectedPokemon (pokeId)
    {
        setUrl(specificPokemonUrl+pokeId);
        setLoading(true);
        console.log(pokeId);
        console.log(data);
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
                {arrayOfIconLinks.map((link, index)=>{
                    return(
                        <img id={index+1} src={link} onClick={()=>getSelectedPokemon(index+1)}/>
                    )
                })}
            </>
        );
    }

}

export default SelectPokemonForm;