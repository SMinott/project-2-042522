import React from 'react'
import { useState } from "react"
import Character from "./Character"

function CharContainer({ charList, deleteChar }) {

  const [name, setName] = useState("")
  const [searchedName, setSearchedName] = useState("")

  function handleChange(event)
  {
    setName(event.target.value)
  }

  function handleSubmit(event)
  {
    event.preventDefault()
    // setSearchedName(name)
    if (name === "")
    {
      setSearchedName("")
    }
    else
    {
      setSearchedName(name)
    }
  }

  console.log(searchedName)
  
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

  return (
    <div>
      <h1>Characters</h1>
      <form onSubmit={ handleSubmit }>
        <input type='text' placeholder='Character Name...' onChange={ handleChange }></input>
        <button>Submit</button>
      </form>
      {displayList}

    </div>
  )
}

export default CharContainer
