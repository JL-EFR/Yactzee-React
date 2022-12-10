import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Y from "./pages/Yactzee"
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Y />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
