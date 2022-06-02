import React, {useState} from 'react'

function Form({newChar}) {
const [formData, setFormData] = useState({
  name: '',
  image: '',
  quote: '',
})

//sets inputs into formData
function handleChange(e){
  setFormData({
    ...formData, [e.target.name]: e.target.value
  })
}

//sends input data to server
function handleSubmit(e){
  e.preventDefault()
  const newObject = {
    name: formData.name,
    image: formData.image,
    quote: formData.quote
  }
  
  fetch("http://localhost:3000/characters", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newObject)
  })
    .then(resp => resp.json())
    .then(data => newChar(data)) //console.log(data)
}

  return (
    <div className="addFormContainer">
      <h1>Submit New Character</h1>
      <form onSubmit={handleSubmit}>
          <input className="addFormInputs" name='name' placeholder='Name' onChange={handleChange}></input>
          <input className="addFormInputs" name='image' placeholder='Image'onChange={handleChange}></input>
          <input className="addFormInputs" name='quote' placeholder='Quote' onChange={handleChange}></input>
        <button id="formButton" >Submit</button>
      </form>
    </div>
  )
}

export default Form
