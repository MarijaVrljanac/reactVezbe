import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  //sve promenljive idu ovde unutar {} i pre returna
  // const prom = <h3>Pozdrav!</h3>;
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* {prom} */}
      <Products />
      </div>

  );
  
  
      
}

export default App;
