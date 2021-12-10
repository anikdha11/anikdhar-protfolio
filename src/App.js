
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
import { SpinnerRoundFilled } from 'spinners-react';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])
  return (
    <div className="App area">

      {
        isLoading === true ? <SpinnerRoundFilled size={150} thickness={48} speed={71} color="rgba(137, 57, 172, 1)" className="mt-5" /> :
          <Router>
            <Header></Header>,


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
              <Route exact path="/projects/:detailsId">
                <ProjectDetails></ProjectDetails>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>

      }


    </div>
  );
}

export default App;
