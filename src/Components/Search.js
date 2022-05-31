import { useState } from "react"

function Search({ filterList })
{

    const [name, setName] = useState("")

    function handleChange(event)
    {
    setName(event.target.value)
    }

    function handleSubmit(event)
    {
      event.preventDefault()
      filterList(name)
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type='text' placeholder='Character Name...' onChange={ handleChange }></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search