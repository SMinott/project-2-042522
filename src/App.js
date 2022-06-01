import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Components/Home';
import CharContainer from './Components/CharContainer';

// import Character from './Components/Character';
import Search from './Components/Search';
// import Filter from './Components/Filter';

import Form from './Components/Form';
import {useState, useEffect} from "react";

function App() {

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

  return (
    <Router>
      <h1 id="title">Mean Girls Characters</h1>
      {/* whatever is above this will remain the same throghout every other page */}
      {/* Every route defined should be encompased in the <routes> element */}
      {/* Everthing outside of <Routes> appears on every page */}
      <nav>
        <ul class="linkClass">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='character'>Character</Link></li>
          <li><Link to='form'>Add Character</Link></li>
          {/* <li><Link to='remove'>Remove Character</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/character' element={ <CharContainer charList={ characterList } deleteChar={handleDeleteCharater}/>} />
        <Route path='/search' element={ <Search charList={ characterList } />} />
        <Route path='/form' element={ <Form newChar={handleAddCharacter} />} />
        {/* <Route path='/remove' element={ <Filter />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
