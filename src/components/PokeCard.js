import React from "react"
import { typeColors } from "./Functions"

export default function PokeCard({ pokemon }) {
  const image = pokemon.sprites.front_default
  const name = titleCase(pokemon.name)
  const types = pokemon.types
  const id = ("00" + pokemon.id).slice(-3)
  const exp = pokemon.base_experience
  
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(" ")
  }

  return (
    <>
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
              let temp = []
              types.forEach((element) => {
                temp.push(typeColors(element));
              })
              return temp
            })()}
          </div>
        </div>
      </div>
    </>
  )
}
