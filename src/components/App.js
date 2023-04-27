import PokeCard from "./PokeCard"
import SearchBar from "./SearchBar"
import PokeAPI from "../pokeapi.png"
import { typeButtons, typeColors } from "./Functions"
import { useEffect, useState, useRef } from "react"

let types = [
  'Normal',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Psychic',
  'Bug',
  'Rock',
  'Ghost',
  'Dark',
  'Dragon',
  'Steel',
  'Fairy'
]

function App() {
  const [catalog, setCatalog] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState([]);
  const searchRender = useRef();
  let temp = [];
  let i = 0;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(res => res.json())
    .then(json => {
      json.results.forEach((pokemon) => {
        fetchPokemonData(pokemon, i);
        i+=1;
      })
      setFiltered(temp);
      setCatalog(temp);
    })
  }, []);

  const fetchPokemonData = (pokemon, i) => {
    let url = pokemon.url;
    fetch(url)
    .then(res => res.json())
    .then(json => {
      temp.push(<PokeCard key={i} pokemon={json}/>)
    })
  }

  const filterType = (type) => {
    let temp = catalog.filter(pokemon => type in pokemon.props.pokemon.types);
    // setFiltered(temp);
  }

  useEffect(() => {
    let value = searchRender.current.value.toLowerCase();
    if (value === '' || value === ' '){
      setFiltered(catalog)
    } else {
      let temp = catalog.filter(components => components.props.pokemon.name.includes(value))
      setFiltered(temp);
    }
  }, [search])

  return (
    <div className="min-w-screen font-pixel">
      <div className="text-6xl flex justify-center align-center mb-12">
        <img src={PokeAPI}></img>
      </div>

      <div className="w-1/2 mx-auto my-4">
        <SearchBar refsearch={searchRender} onChange={e => {
          setSearch(e.target.value);
        }}/>
      </div>
        
      <div className="w-1/2 mx-auto my-4">
        <div>Filter By: </div>
        <div>
          {(() => {
          let temp = [];
          types.forEach((elem) => {
            temp.push(typeButtons(elem, filterType));
          })
          return temp;
          })()}
        </div>
      </div>

      <div className="w-4/6 flex flex-wrap justify-center align-center mx-auto my-0">
        {filtered.length ? filtered : <span>Search for something!</span>}
      </div>
    </div> 
  )
}

export default App
