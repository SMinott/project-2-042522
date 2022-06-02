import FavChar from "./FavChar"

function Favorites({ isFav, removeFav }) {

  const displayList = isFav.map((item) =>
  {
    return (
      <FavChar item={item} removeFav={removeFav}/>
    )
  })

  return (
    <div className="cardContainer">
      {displayList}
    </div>
  )
}

export default Favorites
