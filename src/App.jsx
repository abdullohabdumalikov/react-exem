import { useState } from "react";
import "./App.css";
<<<<<<< HEAD
import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Man from "./assets/components/Man/Man";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <Main />
          <div className="cards">
            <Man />
          </div>
        </div>
      </main>
=======
import Azamat from "./assets/components/Azamat/Azamat";

function App() {    
  return (
    <>
      <div className="container">
        <div className="aza">
          <Azamat />
        </div>{" "}
      </div>{" "}
>>>>>>> f3ee6232500012e60314d55586efb8ebd6188509
    </>
  );
}

export default App;
