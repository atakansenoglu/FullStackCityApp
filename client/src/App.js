import "./App.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import CityList from "./pages/CityList"
import Home from "./pages/Home"

function App() {
  return (
    <div className="FormContainer">
      <Router>
        <Link to="/">Search a city</Link>
        <Link to="/listAll">List cities</Link>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/listAll" exact element={<CityList />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
