import React from "react";
//stavljamo {} zato sto zelimo tacno tu ikonicu
import {BsPlusLg, BsDashLg} from "react-icons/bs";

//za CSS koristimo camelCase notaciju
//interni CSS kao promenljiva
//inline CSS, obavezno {{duple viticaste zagrade}}
function OneProduct() {
    const stil = { margin: 1 + "em", borderStyle: "dotted" };
  return (
    <div className="card" style={stil}>
      <img className="card-img-top" src="https:/picsum.photos/200" alt="Neka slika"></img>
      <div className="card-body">
          <h3 className="card-title">Product name</h3>
          <p className="card-text">This is desciption.</p>
      </div>
      <button className="btn">
          <BsPlusLg />
      </button>
      <button className="btn">
          <BsDashLg />
      </button>
    </div>
  );
  
}

export default OneProduct
