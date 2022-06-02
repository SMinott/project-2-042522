import { useState } from "react"

function Search({ filterList })
{
    const [name, setName] = useState("")

    //sets input to name
    function handleChange(event)
    {
    setName(event.target.value)
    }

    //filters list to show character inputted
    function handleSubmit(event)
    {
      event.preventDefault()
      filterList(name)
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input id="searchInput" type='text' placeholder='Character Name...' onChange={ handleChange }></input>
                <button id="searchButton" >Submit</button>
            </form>
        </div>
    )
}

export default Search