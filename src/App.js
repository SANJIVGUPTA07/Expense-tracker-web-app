import Navbar from "./components/navbar";
import Create from "./components/create";
import { Routes , Route } from "react-router-dom";
import Read from "./components/read";
import Home from "./components/home";
import Blogs from "./components/blogs";

function App() {
  return (
    <>
    <div className="container">
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path="/view" element={<Read/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
        </Routes> 
    </div>
    </>
  );
}

export default App;
