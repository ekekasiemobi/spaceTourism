import Home from "./pages/home"
import DestinationA from './pages/destinationA'


import CrewA from './pages/crewA'
import CrewB from './pages/crewB'

import TechnologyA from './pages/technologyA/'


import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destinationA" element={<DestinationA />}/>

        <Route path="/crewA" element={<CrewA />}/>
        <Route path="/crewB" element={<CrewB />}/>

        <Route path="/technologyA" element={<TechnologyA />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
