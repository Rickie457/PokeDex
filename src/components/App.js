import PokeCard from "./PokeCard"
import SearchBar from "./SearchBar"
import PokeAPI from "../pokeapi.png"
import { typeButtons } from "./Functions"
import { useEffect, useState, useRef } from "react"

// All Pokemon types
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
  'Fairy',
  'Reset'
]

function App() {
  // Pokemon Data
  const [catalog, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokeCardDeck, setPokeCardDeck] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Search and filters
  const [search, setSearch] = useState([]);
  const [type, setTypeFilter] = useState("");
  const resetCatalog = useRef();
  const searchRender = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=21');
        const jsonData = await response.json();
        setCatalog(jsonData.results);
        } catch (err) {
        console.log('Error fetching data' + err);
      } finally {
        // console.log(catalog);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const getPokemonData = async(url) => {
      setIsLoading(true);
      try{
        const response = await fetch(url);
        return await response.json();
      } catch (err) {
        console.log("Error with Pokemon Data: " + err);
      } finally {
        setIsLoading(false);
      }
    }

    if(!isLoading){
      catalog.forEach(async (pokemon) => {
        const data = (await getPokemonData(pokemon.url));
        setPokeCardDeck(prevList => [...prevList, <PokeCard pokemon={data}/>])
        setFiltered(prevList => [...prevList, <PokeCard pokemon={data}/>])
      })
    }
  }, [catalog])

  useEffect(() => {
    if(!isLoading){
      let value = searchRender.current.value;
      if (value === ''){
        setFiltered(pokeCardDeck)
      } else {
        let temp = filtered.filter(components => components.props.pokemon.name.includes(value))
        setFiltered(temp);
      }
    }
  }, [search])

  useEffect(() => {
    let newFilter = [];
    if(type === "Reset"){
      setFiltered(pokeCardDeck);
    } else {
      pokeCardDeck.forEach(pokemon => {
        pokemon.props.pokemon.types.forEach((slot) => {
          if (type.toLowerCase() === slot.type.name) {
            newFilter.push(pokemon);
          }
        })
      })
      setFiltered(newFilter);
    }
  }, [type])

  return (
    <div>
      {isLoading ? (
        <div>Loading Data...</div>
      ) : (
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
          <div className="flex flex-wrap">
            {(() => {
            let temp = [];
            types.forEach((elem) => {
              temp.push(typeButtons(elem, setTypeFilter, resetCatalog));
            })
            return temp;
            })()}
          </div>
        </div>

        <div className="w-4/6 flex flex-wrap justify-center align-center mx-auto my-0">
          {isLoading ? (<div>Loading...</div>) : (filtered)}
        </div>
      </div> 
      )}
    </div>
  );
}

export default App
