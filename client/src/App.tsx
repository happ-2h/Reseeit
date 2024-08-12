import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProductsContextProvider } from './context/ProductsContext';

import AddProduct    from './routes/AddProduct';
import Home          from './routes/Home';
import UpdateProduct from './routes/UpdateProduct';
import Header        from "./components/Header";

import './assets/styles/App.css';

function App() {
  return (
    <ProductsContextProvider>
      <div id="app-wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path='/'                   element={<Home />} />
            <Route path='/addproduct'         element={<AddProduct />} />
            <Route path='/product/:id/update' element={<UpdateProduct />} />
          </Routes>
        </Router>
      </div>
    </ProductsContextProvider>
  )
}

export default App
