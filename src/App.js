
import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App area">
    
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/blog">
         <Blog></Blog>
          </Route>
          <Route exact path="projects/:detailsId">
          <ProjectDetails></ProjectDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
