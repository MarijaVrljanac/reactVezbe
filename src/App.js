import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"; //Routes je kao switch(), Route je kao case

function App() {
  //sve promenljive idu ovde unutar {} i pre returna
  // const prom = <h3>Pozdrav!</h3>;
  //U Reactu se informacije salju odozgo na dole
  // let cartNum = 0;
  
  //za menjanje vrednosti promenljive useState
  //const [state, setState] = useState(initialState)

  const [cartNum, setCartNum] = useState(0);


  const products = [
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ];

function addProduct(title){
  console.log("Dodat je proizvod: "+title);
  setCartNum(cartNum + 1);
  console.log("Broj proizvoda u korpi: "+cartNum);
}


  return (
      <BrowserRouter className="App">
        <NavBar cartNum={cartNum}></NavBar>
        <Routes>
          <Route 
            path="/"
            element={<Products products={products} onAdd={addProduct}/>}
          />
          <Route 
            path="/cart*" //prihvata sve putanje; konkretna putanja bi bila npr /cart/:id
            element={<Cart />}
          />
        </Routes>
        
      </BrowserRouter>
  );     
}

export default App;
