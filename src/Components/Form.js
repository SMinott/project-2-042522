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
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Submit New Recipes</h1>
        <input name='name' placeholder='Name' onChange={handleChange}></input>
        <input name='image' placeholder='Image'onChange={handleChange}></input>
        <input name='quote' placeholder='Quote' onChange={handleChange}></input>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
