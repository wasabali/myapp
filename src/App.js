import Navbar from "./Header/Header";
import KlasseList from "./VelgKlasse/KlasseList";
import "./App.css";
import { useState } from "react";
import Modal from "./Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";



//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>

function App() {
  return (
    
      <div className="App">
        <Navbar />

        <div className="content">
          <div className="body">
            <KlasseList />
          </div>
        </div>
      </div>
   
  );
}

export default App;
