import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/custom.css'
import './assets/css/bootstrap.min.css'
import './assets/css/responsive.css'
import Banner from './components/Banner/Banner'
import Analysis from './components/Analysis/Analysis'
import Services from './components/Services/Services'
import TopNavigation from './components/TopNavigation/TopNavigation'
import AboutVideo from './components/AboutVideo/AboutVideo'
import Sponsore from './components/Sponsore/Sponsore'
import Summary from './components/Summary/Summary'
import Contact from './components/Contact/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TopNavigation/>
     <Banner/>
     <Analysis/>
     <AboutVideo/>
     <Sponsore/>
     <Summary/>
     <Contact/>
  
    
     
    </>
  )
}

export default App
