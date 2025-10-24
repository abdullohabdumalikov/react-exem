import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Man from "./assets/components/Man/Man";
import Azamat from "./assets/components/Azamat/Azamat";

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
    </>
  );
}

export default App;
