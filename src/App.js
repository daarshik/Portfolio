import Experience from "./components/Experience&Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/skill" Component={Skills}></Route>
          <Route path="/about" Component={Experience}></Route>
        </Routes>
      </BrowserRouter>
      {/*<div className="flex justify-center items-center m-0 p-0 bg-white bg-transparent ">
        <AiFillLinkedin className="m-1 h-12  w-32" />
        <AiFillGithub className="m-1 p-1 h-12  w-32" />
        <AiOutlineMail className="m-1 p-1 h-12  w-32" />
  </div>*/}
    </>
  );
}

export default App;
