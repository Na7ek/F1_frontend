import './App.css';
import Header from './Header';
import Schedule from './Schedule';
import Teams from './Teams';
import FantasyNGaming from './FantasyNGaming/index.jsx'
import GPPage from './GPPage/index.jsx'
import TableGP from './TableGP/index.jsx';


function App() {

  return (
    <div className=' overflow-x-hidden'>
      <div className='flex flex-col gap-3 bg-[#1C2541]'>
      <Header/>
      {/* <GPPage/> */}
      {/* <FantasyNGaming/> */}
      <Schedule/>
      <Teams/>
      <div className='flex flex-col h-10 bg-[#1C2541]'></div>
      </div>
    </div>
  )
}

export default App