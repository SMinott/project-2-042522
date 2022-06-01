import React from 'react'

function Character({ item }) {

  return (
    <div class="card">
      <h2>{item.name}</h2>
      <img class="cardPic" src={item.image}></img>
      <h3>{item.quote}</h3>
    </div>
  )
}

export default Character
