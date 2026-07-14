import Home from "./pages/home"
import DestinationA from './pages/destinationA'
import DestinationB from './pages/destinationB'
import DestinationC from './pages/destinationC'
import DestinationD from './pages/destinationD'

import CrewA from './pages/crewA'
import CrewB from './pages/crewB'

import TechnologyA from './pages/technologyA/'
import TechnologyB from './pages/technologyB/'
import TechnologyC from './pages/technologyC/'

import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destinationA" element={<DestinationA />}/>
        <Route path="/destinationB" element={<DestinationB />}/>
        <Route path="/destinationC" element={<DestinationC />}/>
        <Route path="/destinationD" element={<DestinationD />}/>

        <Route path="/crewA" element={<CrewA />}/>
        <Route path="/crewB" element={<CrewB />}/>

        <Route path="/technologyA" element={<TechnologyA />}/>
        <Route path="/technologyB" element={<TechnologyB />}/>
         <Route path="/technologyC" element={<TechnologyC />}/>


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
