import React, { useState } from "react";




import Pagenav from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";

import "./App.css"
import "bulma/css/bulma.min.css";

function App() {
  const [activeComponent, setActiveComponent] = useState(<Home />);

  return (

      
      <div className="App">
        <Pagenav setActiveComponent={setActiveComponent} />
        <div className="main">{activeComponent}</div>
        <Footer />
      </div>

  );
}

export default App;
