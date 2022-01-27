import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import Profile from "./Components/Profile/Profile"
import Error404 from "./Components/Error404/Error404"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"
import Contact from "./Components/Contact/Contact"
import Stati from "./Components/Stati/Stati"
import Timer from "./Components/Timer/Timer"
import Game from "./Components/Game/Game"
import Pendu from "./Components/Game/Pendu/Pendu"
import Modal from "./Components/Modal/Modal"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="wrapper">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/statistique" element={<Stati/>} />
          <Route path="/game" element={<Game/>}>
            <Route path="/game/pendu" element={<Pendu/>} />
          </Route>
          <Route path="/timer" element={<Timer/>} />
          <Route path="/profil/:id" element={<Profile/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
