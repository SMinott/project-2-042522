import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Components/Home';
import Character from './Components/Character';
import Search from './Components/Search';
import Form from './Components/Form';

function App() {
  return (
    <Router>
      {/* whatever is above this will remain the same throghout every other page */}
      {/* Every route defined should be encompased in the <routes> element */}
      {/* Everthing outside of <Routes> appears on every page */}
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='list'>Characters</Link></li>
          <li><Link to='search'>Search</Link></li>
          <li><Link to='form'>Add Character</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/character' element={ <Character />} />
        <Route path='/search' element={ <Search />} />
        <Route path='/form' element={ <Form />} />
      </Routes>
    </Router>
  );
}

export default App;
