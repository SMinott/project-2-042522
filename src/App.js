import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Components/Home';
import CharContainer from './Components/CharContainer';

// import Character from './Components/Character';
import Search from './Components/Search';
// import Filter from './Components/Filter';

import Form from './Components/Form';
import Favorites from "./Components/Favorites";
import {useState, useEffect} from "react";
import { gsap } from "gsap";
import Bus from "./Components/Bus"

function App() {

  //loading screen
  const [loading, setLoading] = useState(false);
  useEffect(() =>
  {
    setLoading(true)
    setTimeout(() =>
    {
      setLoading(false)
    }, 5000)
  }, [])

  const [characterList, setCharacterList] = useState([])

  useEffect(() =>
  {
    fetch("http://localhost:3000/characters")
    .then(resp => resp.json())
    .then(setCharacterList)
  }, [])

  function handleAddCharacter(newChar){
    setCharacterList([newChar, ...characterList])
  }

  function handleDeleteCharater(id){
    const deleteCharacter = characterList.filter((item) => item.id !==id)
    setCharacterList(deleteCharacter)
  }

  //adds favorited character to favorites list
  const [isFav, setIsFav] = useState([])
  const addToFavs = (item) =>
  {
    setIsFav([...isFav, item])
  }

  //removes from favorites list
  const [removedId, setRemovedId] = useState("")
  const removeFav = (id) =>
  {
    // setRemovedId(item)
    const remFavList = isFav.filter((item) =>
    {
      return (
        item.id !== id
      )
    })
    setIsFav(remFavList)
  }

  return (
    <div class="App">
      {loading ? 
        <Bus />
      :
      <div class="homePage">
        <Router>
          <h1 id="title">Mean Girls Characters</h1>
          {/* <Bus /> */}
          {/* whatever is above this will remain the same throghout every other page */}
          {/* Every route defined should be encompased in the <routes> element */}
          {/* Everthing outside of <Routes> appears on every page */}
          <nav>
            <ul className="linkClass">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='character'>Character</Link></li>
              <li><Link to='form'>Add Character</Link></li>
              <li><Link to='favorites'>Favorites</Link></li>
              {/* <li><Link to='remove'>Remove Character</Link></li> */}
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/character' element={ <CharContainer charList={ characterList } deleteChar={handleDeleteCharater} addToFavs={addToFavs} />} />
            <Route path='/search' element={ <Search charList={ characterList } />} />
            <Route path='/form' element={ <Form newChar={handleAddCharacter} />} />
            <Route path='/favorites' element={ <Favorites isFav={isFav} removeFav={removeFav}/>} />
            {/* <Route path='/remove' element={ <Filter />} /> */}
          </Routes>
        </Router>
      </div>      
      }
    </div>
  );
}

export default App;
