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
        <div className="flex flex-col">
          <Navbar />
          <div>
            <div className="text-white z-50 fixed bottom-0 flex justify-center items-center bg-transparent setIcons">
              <div className="flex border rounded m-5">
                <AiFillLinkedin className="p-1 h-12  w-28" />
                <AiFillGithub className="p-1 h-12  w-28" />
                <AiOutlineMail className="p-1 h-12  w-28" />
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/skill" Component={Skills}></Route>
          <Route path="/about" Component={Experience}></Route>
        </Routes>
      </BrowserRouter>

      {/**/}
    </>
  );
}

export default App;
