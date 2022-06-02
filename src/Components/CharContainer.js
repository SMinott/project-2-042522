import { useState } from "react"
import Character from "./Character"
import Search from "./Search"

function CharContainer({ charList, deleteChar, addToFavs }) {

  const [searchedName, setSearchedName] = useState("")

  //sets searched name
  const filterList = (item) =>
  {
      setSearchedName(item)
  }

  //filters character list to find searched input
  const searchList = charList.filter((item) =>
  {
    return (
      item.name.toLowerCase().includes(searchedName.toLowerCase())
    )
  })

  //displays character cards
  const displayList = searchList.map((item) =>
  {
    return (
      <Character item={item} deleteChar={deleteChar} addToFavs={addToFavs} />
    )
  })
   
  return (
    <div>
      <h1>Characters</h1>
      <Search filterList={ filterList }/>
      <div className="cardContainer">
        {displayList}
      </div>
    </div>
  )
}

export default CharContainer
