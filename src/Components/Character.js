import React, {useState} from 'react'

function Character({ item, deleteChar, addToFavs }) {
  const [seefavorite, setSeeFavorite] = useState(false)
  const {id, name, image, quote} = item

  //adds character to favorite list
  function handleClickFav()
  {
    setSeeFavorite(seefavorite => !seefavorite)
    if (seefavorite === false)
    {
      addToFavs(item)
    }
  }

  //deletes character
  function handleClickDelete()
  {
    fetch(`http://localhost:3000/characters/${id}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then(() => deleteChar(id)) //new prop created from new handleDelete func in Container
  }


  return (
    <div className="card">
      <h1>{name}</h1>
      <img className="cardPic" src={image} alt={name} ></img>
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
