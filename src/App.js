import React, { createContext, useEffect, useState }  from "react"
import Counter from "./Counter";
import Reducer1 from "./Reducer1";
import Effect from "./Effect";
import Refhook from "./Refhook";
// import UseLayoutEffect from "./UseLayoutEffect";
import LayoutEffect from "./LayoutEffect";
import Imperativehandle from "./Imperatie/ImperativeHandle";
import Context from "./Context";
import Car from "./Car";
import Event from "./Event";
import Conditional from "./Conditional";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";




const UserConnect = createContext()

function App() {
  const [user, setUser] = useState("ajay") ;
  // const carInfo = { name: "Ford", model: "Mustang" };
  // const carInfo = { 
  //   name: "bmw",
  //   series: "mercedy"
  // };

  // const cars = [
  //   { id: "bmw", name: "ajay" },
  //   { id: "ford", name: "sahani" },
  //   { id: "mercedy", name: "geeta"}
  // ]
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  const controllerName = [
    {id: 1, name: "Airport Controller" },
    {id: 2, name: "Train Controller" },
    {id: 3, name: "Bus controller" }
  ]
  
  useEffect(() => {
    setUser("let buil it") 
  },[])

  return (
    <div className="App">
      <Counter />
      <Reducer1 />
      <Effect />
      <Refhook />
      <LayoutEffect />
      <Imperativehandle />
      <UserConnect.Provider value={user}>
        <Context />
      </UserConnect.Provider>
      {/* <Car model= "BMW" /> */}
      {/* <Car model= { carInfo } /> */}
      <Event />
      {/* {cars.map((car) => <Car key={car.id} brand={car.name} />)}
       */}
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      
       {/* {cars.map((car) => <Car key={car.id} brand={car.brand} />)} */}
      
        {/* { controllerName.map((controller) => <Car key1={controller.id} brand1={controller.name} />)} */}
      </ul>
      <ul>
        { controllerName.map((controller) => <Conditional key1={controller.id} brand1={controller.name} />)}
      </ul>

      <Router>
        <div>
          <Link to="/">
            Home
          </Link>
        </div>
        <div>
          <Link to="/bLog">Blog</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/gallery">
            gallery
          </Link>
        </div>
        <Switch>
          <Route exact path= "/">
            <Home />
          </Route>
          <Route path ="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
export { UserConnect }
