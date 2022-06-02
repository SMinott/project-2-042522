function FavChar({ item, removeFav}) {

  const {id, name, image, quote} = item

  function handleRemove()
  {
      removeFav(id)
  }

  return (
    <div className="card">
      <h1>{name}</h1>
      <img className="cardPic" src={image} alt={name} ></img>
      <h3>{quote}</h3>
      <button id="removeButton" onClick={handleRemove} >Remove</button>
    </div>
  )
}

export default FavChar