import React, {useState} from 'react'

function Form({newChar}) {
const [formData, setFormData] = useState({
  name: '',
  image: '',
  quote: '',
})

function handleChange(e){
  setFormData({
    ...formData, [e.target.name]: e.target.value
  })
}

function handleSubmit(e){
  e.preventDefault()
  // console.log('hi')
  const newObject = {
    name: formData.name,
    image: formData.image,
    quote: formData.quote
  }
  // console.log(newObject)
  fetch("http://localhost:3000/characters", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newObject)
  })
    .then(resp => resp.json())
    .then(data => newChar(data))
}

  return (
    <div class="addFormContainer">
      <h1>Submit New Character</h1>
      <form onSubmit={handleSubmit}>
          <input class="addFormInputs" name='name' placeholder='Name' onChange={handleChange}></input>
          <input class="addFormInputs" name='image' placeholder='Image'onChange={handleChange}></input>
          <input class="addFormInputs" name='quote' placeholder='Quote' onChange={handleChange}></input>
        <button id="formButton" >Submit</button>
      </form>
    </div>
  )
}

export default Form
