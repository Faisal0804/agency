import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/custom.css'
import './assets/css/bootstrap.min.css'
import './assets/css/responsive.css'
import Banner from './components/Banner/Banner'
import Analysis from './components/Analysis/Analysis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Banner/>
     <Analysis/>
     
    </>
  )
}

export default App
