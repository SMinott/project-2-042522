import React from 'react'

function Character({ item }) {

  console.log(item)

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image}></img>
      <h3>{item.quote}</h3>
    </div>
  )
}

export default Character
