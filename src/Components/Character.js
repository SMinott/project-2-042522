import React, {useState} from 'react'

function Character({ item, deleteChar}) {
  const [seefavorite, setSeeFavorite] = useState(false)
  const {id, name, image, quote} = item

  function handleClickFav(){
    setSeeFavorite(seefavorite => !seefavorite)
  }

  function handleClickDelete(){
    fetch(`http://localhost:3000/characters${id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(() => deleteChar(id)) //new prop created from new handleDelete func in Container
  }

  // console.log(item)

  return (
    <div class="card">
      <h1>{name}</h1>
      <img class="cardPic" src={image} alt={name} ></img>
      <h3>{quote}</h3>

      {seefavorite ? (
          <button onClick={handleClickFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClickFav} className="emoji-button favorite">☆</button>
        )}

      <button onClick={handleClickDelete} className="emoji-button delete">🗑</button>
    </div>
  )
}

export default Character
