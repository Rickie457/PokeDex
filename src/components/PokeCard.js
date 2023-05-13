import {React, useEffect, useState} from "react"
import { typeColors, titleCase } from "./Functions"

export default function PokeCard({ pokemon }) {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isDataLoaded, setIsDataLoaded] = useState(false);
  // const [data, setData] = useState();
  // const [name, setName] = useState();
  // const [types, setTypes] = useState();
  // const [id, setID] = useState();
  // const [exp, setEXP] = useState();
  // const [image, setImage] = useState();

  const name = titleCase(pokemon.name);
  const types = pokemon.types;
  const id = pokemon.id;
  const exp = pokemon.base_exp;
  const image = pokemon.sprites.front_default;

  // useEffect(() => {
  //   const fetchPokemon = async(url) => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(url);
  //       const jsonPokemon = await response.json();
  //       setData(jsonPokemon);
  //     } catch (err) {
  //       console.log("PokeCard Error " + err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchPokemon(pokemon.url);
  // }, [])

  // useEffect(() => {
  //   if(!isLoading){
  //     setName(titleCase(data.name));
  //     setTypes(data.types);
  //     setID(data.id);
  //     setEXP(data.base_experience);
  //     setImage(data.sprites.front_default);
  //     setIsDataLoaded(true);
  //   }
  // }, [data])

  return (
    <>
    {/* {isLoading ? (<div>Loading Pokemon...</div>) : ( */}
    <div className="w-1/6 rounded-lg m-2 mx-3 p-2 text-center bg-white drop-shadow-lg">
        <div className="flex flex-row justify-around">
          <div>#{id}</div>
          <div>EXP: {exp}</div>
        </div>

        <div className="w-full h-4/6 flex justify-center align-center">
          <img className="w-5/6" src={image} />
        </div>

        <div className="w-5/6 table mx-auto my-0">
          <div className="text-2xl text-center">{name}</div>
          <div className="flex flex-row justify-center align-center">
            {(() => {
              // if(isDataLoaded){
                let temp = []
                types.forEach((element) => {
                  temp.push(typeColors(element.type.name));
                })
                return temp
              // }
            })()}
          </div>
        </div>
      </div>
    {/* )} */}
    </>
  )
}
