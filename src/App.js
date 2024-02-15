import React from 'react'
import RoundOne from "./components/Round/RoundOne";
import RoundTwo from './components/Round/RoundTwo';
import RoundThree from './components/Round/RoundThree';
import RoundFour from './components/Round/RoundFour';
import RoundFive from './components/Round/RoundFive';
import Home from './Home';
function App()  {
  return (
    <div className='w-full h-screen font-bodyFont text-textColor bg-black relative overflow-hidden '>
      <div className='max-w-screen-2x1 h-full mx-auto flex justify-center items-center'>
        <Home/>
      </div>
      <div className='w-full h-full absolute top-0 left-0 z-10'>
      <RoundOne />
      <RoundTwo />
      <RoundThree />
      <RoundFour />
      <RoundFive />
      </div>
    </div>
  )
}

export default App
