import './App.css';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/index.jsx';
import Schedule from './Pages/Schedule/index.jsx';
import Teams from './Pages/Teams/index.jsx';
import FantasyNGaming from './Pages/FantasyNGaming/index.jsx'
import GPPage from './Pages/GPPage/index.jsx'
import Footer from './Components/Footer/index.jsx';
import Drivers from './Pages/Drivers/index.jsx';
import HallOfFame from './Pages/HallOfFame/index.jsx';
import DriverProfile from './Pages/DriverProfile/index.jsx';
import TeamProfile from './Pages/TeamProfile/index.jsx';
import HomePage from './Pages/HomePage/index.jsx';
import Results from './Pages/Results/index.jsx';
=======
import Header from './Header';
import Schedule from './Schedule';
import Teams from './Teams';
import FantasyNGaming from './FantasyNGaming/index.jsx'
import GPPage from './GPPage/index.jsx'
import TableGP from './TableGP/index.jsx';
import TeamProfile from './TeamProfile/index.jsx';

>>>>>>> 354818f3c664fefad8e5e2a870703dc1de6b7b66

function App() {

  return (
    <div className=' overflow-x-hidden'>
      <div className='flex flex-col gap-3 bg-[#1C2541]'>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Teams" element={<Teams/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
        <Route path="/Drivers" element={<Drivers/>}/>
        <Route path="/Results" element={<Results/>}/>
        <Route path="/Fantasy&Gaming" element={<FantasyNGaming/>}/>
        <Route path="/HallOfFame" element={<HallOfFame/>}/>
        <Route path="/Teams/:id" element={<TeamProfile />} />
        <Route path="/Drivers/:num" element={<DriverProfile/>}/>
        <Route path="/Schedule/:round" element={<GPPage/>}/>
      </Routes>
      <div className='flex flex-col h-2 bg-[#1C2541]'></div>
      <Footer/>
      </div>
      <TeamProfile/>
    </div>
  )
}

export default App