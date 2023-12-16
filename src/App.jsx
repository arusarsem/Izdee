import {MainPage,Login, Profile, Mentors, Program, Register, Mentor, Navbar} from './components/index'
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
        

      </Routes>
     </Router>

      
    </div>
  );
}

export default App
