import Experience from "./components/Experience&Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
