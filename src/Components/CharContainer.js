import { useState } from "react"
import Character from "./Character"
import Search from "./Search"

function CharContainer({ charList, deleteChar }) {

    const [searchedName, setSearchedName] = useState("")

    const filterList = (item) =>
    {
        setSearchedName(item)
    }

    const searchList = charList.filter((item) =>
    {
      return (
        item.name.toLowerCase().includes(searchedName.toLowerCase())
      )
    })
  
<<<<<<< HEAD
  const searchList = charList.filter((item) =>
  {
    return (
      item.name.toLowerCase().includes(searchedName.toLowerCase())
    )
  })

  const displayList = searchList.map((item) =>
  {
    return (
      <Character item={item} deleteChar={deleteChar} />
    )
  })
=======
    const displayList = searchList.map((item) =>
    {
      return (
        <Character item={item} />
      )
    })
>>>>>>> 359f0080af5933ecd9303f27a9e258dd8e493a3d

  return (
    <div>
      <h1>Characters</h1>
      <Search filterList={ filterList }/>
      {displayList}

    </div>
  )
}

export default CharContainer
