import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';
import Home from './Components/home';
import Navbar from './Components/navbar';
import About from './Components/about';
import NotesState from './Context/notes/NotesState';
import Notes from './Components/notes';
import Alert from './Components/alert';



function App() {
  return (
    <>
      <NotesState>
          <BrowserRouter initialEntries={['/home']}>
              <Navbar />
              <Alert message="Note is updated" type="success" />
              <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/aboutus" element={<About />} />
              </Routes>
          </BrowserRouter>
      </NotesState>
    </>
  );
}

export default App;
