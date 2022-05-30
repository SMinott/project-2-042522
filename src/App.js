import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import RecipeList from './Components/RecipeList';
import RecipeSearch from './Components/RecipeSearch';
import RecipeForm from './Components/RecipeForm';

function App() {
  return (
    <Router>
      <p>Phase 2 Project by Susan & Angelina.</p>
      {/* whatever is above this will remain the same throghout every other page */}
      {/* Every route edefined should be encompased over the <routes> element */}
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
