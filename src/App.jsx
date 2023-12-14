
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
  Login,
} from "./components/index";



function App() {
  return (

    


    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
      

      {/* <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>

    </Routes>
    </BrowserRouter> */}

    {/* <RouterProvider router={router} /> */}
    </div>


  );
}

export default App;
