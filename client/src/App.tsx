import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProductsContextProvider } from './context/ProductsContext';

import Header from "./components/Header";
import Home   from './routes/Home';

import './assets/styles/App.css';

function App() {
  return (
    <ProductsContextProvider>
      <div id="app-wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ProductsContextProvider>
  )
}

export default App
