import './App.css'
import './index.css';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EggIcon from '@mui/icons-material/Egg';
import Horgas from './assets/images/horga.jpg';

function App() {
  

  return (
    <>
      <div className="bg-gradient-to-l from-indigo-800 to-indigo-950 h-800 w-3/12 m-auto mt-10 p-2 rounded-l-lg border-2 flex flex-col justify-between text-center " >
       <div className="text-xs text-center font-custom text-indigo-400">
          Harry Potter
       </div>

       <div className="rounded-full relative left-12 w-350 h-350 bg-white bg-cover bg-center" style={{backgroundImage: `url(${Horgas})`}}>
      
       </div>

       <div className="text-indigo-400 tex-sm">
         J.K. ROWLING
       </div>
      </div>
   
    </>
  )
}

export default App
