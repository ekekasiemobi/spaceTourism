import Home from "./pages/home"
import DestinationA from './pages/destinationA'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destinationA" element={<DestinationA />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
