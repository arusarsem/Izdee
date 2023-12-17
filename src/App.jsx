
import {MainPage,Login, Signup, Profile,Mentors,Program} from './components/index'
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
        <Route exact path='/mentors'  element={<Mentors/>}/>
        <Route exact path='/programs'  element={<Program/>}/>
        
      </Routes>
     </Router>

      
    </div>
  );
}

export default App
