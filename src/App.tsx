import Home from "./pages/home"
import DestinationA from './pages/destinationA'
import DestinationB from './pages/destinationB'
import DestinationC from './pages/destinationC'
import DestinationD from './pages/destinationD'
import CrewA from './pages/crewA'
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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
