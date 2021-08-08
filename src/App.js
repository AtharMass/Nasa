import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import NavBar from './components/NavBar'
import Container from './components/Container'
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar defaultactivekey="/home" className="navbar-style" variant="light">
        <Navbar.Brand href="/"> <img src={logo} id="logo" className="d-inline-block align-top" alt="React Bootstrap logo"/></Navbar.Brand>
        <NavBar/>
      </Navbar>
      <Container/> 
      {/* <Route exact path="/search" render={() => <Search />}  />
      <Route exact path="/favourites" render={() => <Favourites />}  /> */}
      <footer>
          <p id="footer">&copy; All rights reserved, {new Date().getFullYear()} - Design & devlopement by - Atar Saadi with &hearts; </p>
      </footer>
    </div>
     
  </Router>
  );
}

export default App;


