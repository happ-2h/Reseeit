import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header";

import './assets/styles/App.css';
import Home from './routes/Home';

function App() {
  return (
    <div id="app-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
