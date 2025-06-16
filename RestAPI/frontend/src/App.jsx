import{BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
