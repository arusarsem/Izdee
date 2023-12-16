import {MainPage,Login, Profile, Mentors, Program, Register, Mentor} from './components/index'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route exact path='/' element={<MainPage />}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/mentors' element={<Mentors/>}/>
        <Route exact path='/programs' element={<Program/>}/>
        <Route exact path='/mentor' element={<Mentor/>}/>
        {/* <Route exact path='/mentor' element={<Navbar/>}/> */}

      </Routes>
     </Router>

      
    </div>
  );
}

export default App
