import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import Community from './pages/Community'

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/community' element={<Community />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}