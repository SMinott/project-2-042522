// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Components/Home';
import RecipeList from './Components/RecipeList';
import RecipeSearch from './Components/RecipeSearch';
import RecipeForm from './Components/RecipeForm';

function App() {
  return (
    <Router>
      {/* whatever is above this will remain the same throghout every other page */}
      {/* Every route defined should be encompased in the <routes> element */}
      {/* Everthing outside of <Routes> appears on every page */}
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='list'>Recipes</Link></li>
          <li><Link to='search'>Search</Link></li>
          <li><Link to='form'>Add Recipe</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/list' element={ <RecipeList />} />
        <Route path='/search' element={ <RecipeSearch />} />
        <Route path='/form' element={ <RecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
