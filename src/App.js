import Experience from "./components/Experience&Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import FootBar from "./components/FootBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col">
          <Navbar />
          <FootBar />
        </div>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/skill" Component={Skills}></Route>
          <Route path="/about" Component={Experience}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>

      {/**/}
    </>
  );
}

export default App;
