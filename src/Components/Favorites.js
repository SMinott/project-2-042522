import FavChar from "./FavChar"

function Favorites({ isFav, removeFav }) {

  //displays cards of favorited characters
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
