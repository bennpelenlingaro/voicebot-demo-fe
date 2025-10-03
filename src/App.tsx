import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout'
import Dashboard from '@/pages/dashboard'
import LatestCalls from '@/pages/latestCalls'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="latest-calls" element={<LatestCalls />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
