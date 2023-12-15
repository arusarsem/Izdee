import {MainPage,Login, Signup, Profile, Mentors} from './components/index'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route exact path='/' element={<MainPage />}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/mentors' element={<Mentors/>}/>
      </Routes>
     </Router>

      
    </div>
  );
}

export default App
