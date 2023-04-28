export const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}

export const typeColors = (el) => {
  el = titleCase(el);
  switch (el) {
    case "Fire":
      return (
        <div className="mx-1 px-2 bg-red-400 rounded-lg">
          {el}
        </div>
      )
    case "Grass":
      return (
        <div className="mx-1 px-2 bg-green-500 rounded-lg">
          {el}
        </div>
      )
    case "Water":
      return(
        <div className="mx-1 px-2 bg-blue-400 rounded-lg">
          {el}
        </div>
      )
    case "Normal":
      return(
        <div className="mx-1 px-2 bg-gray-200 rounded-lg">
          {el}
        </div>
      )
    case "Poison":
      return(
        <div className="mx-1 px-2 bg-purple-400 rounded-lg">
          {el}
        </div>
      )
      case "Bug":
        return(
        <div className="mx-1 px-2 bg-lime-400 rounded-lg">
          {el}
        </div>
      )
      case "Electric":
      return(
        <div className="mx-1 px-2 bg-yellow-300 rounded-lg">
          {el}
        </div>
      )
      case "Ground":
      return(
        <div className="mx-1 px-2 bg-yellow-600 rounded-lg">
          {el}
        </div>
      )
      case "Fairy":
      return(
        <div className="mx-1 px-2 bg-pink-300 rounded-lg">
          {el}
        </div>
      )
      case "Psychic":
      return(
        <div className="mx-1 px-2 bg-pink-400 rounded-lg">
          {el}
        </div>
      )
      case "Steel":
      return(
        <div className="mx-1 px-2 bg-slate-400 rounded-lg">
          {el}
        </div>
      )
      case "Fighting":
      return(
        <div className="mx-1 px-2 bg-rose-500 rounded-lg">
          {el}
        </div>
      )
      case "Flying":
      return(
        <div className="mx-1 px-2 bg-sky-200 rounded-lg">
          {el}
        </div>
      )
      case "Rock":
      return(
        <div className="mx-1 px-2 bg-yellow-600 rounded-lg">
          {el}
        </div>
      )
      case "Dragon":
      return(
        <div className="mx-1 px-2 bg-blue-400 rounded-lg">
          {el}
        </div>
      )
      case "Dark":
      return(
        <div className="mx-1 px-2 bg-gray-800 rounded-lg text-white">
          {el}
        </div>
      )
      case "Ice":
      return(
        <div className="mx-1 px-2 bg-sky-400 rounded-lg text-white">
          {el}
        </div>
      )
      case "Ghost":
      return(
        <div className="mx-1 px-2 bg-purple-700 rounded-lg text-white">
          {el}
        </div>
      )
  }
}

export const typeButtons = (el, setFilterType, resetCatalog) => {
  switch (el) {
    case "Fire":
      return (
        <button className="m-1 px-2 bg-red-400 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
    case "Grass":
      return (
        <button className="m-1 px-2 bg-green-500 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
    case "Water":
      return(
        <button className="m-1 px-2 bg-blue-400 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
    case "Normal":
      return(
        <button className="m-1 px-2 bg-gray-200 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
    case "Poison":
      return(
        <button className="m-1 px-2 bg-purple-400 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Bug":
        return(
        <button className="m-1 px-2 bg-lime-400 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Electric":
      return(
        <button className="m-1 px-2 bg-yellow-300 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Ground":
      return(
        <button className="m-1 px-2 bg-yellow-600 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Fairy":
      return(
        <button className="m-1 px-2 bg-pink-300 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Psychic":
      return(
        <button className="m-1 px-2 bg-pink-400 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Steel":
      return(
        <button className="m-1 px-2 bg-slate-400 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Fighting":
      return(
        <button className="m-1 px-2 bg-rose-500 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Flying":
      return(
        <button className="m-1 px-2 bg-sky-200 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Rock":
      return(
        <button className="m-1 px-2 bg-yellow-600 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Dragon":
      return(
        <button className="m-1 px-2 bg-blue-400 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Dark":
      return(
        <button className="m-1 px-2 bg-gray-800 rounded-lg text-white" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Ice":
      return(
        <button className="m-1 px-2 bg-sky-400 rounded-lg" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Ghost":
      return(
        <button className="m-1 px-2 bg-purple-700 rounded-lg text-white" onClick={() => setFilterType(el)}>
          {el}
        </button>
      )
      case "Reset":
      return(
        <button className="m-1 px-2 bg-black rounded-lg text-white" onClick={() => setFilterType("Reset")}>
          {el}
        </button>
      )
  }
}