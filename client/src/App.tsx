import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProductsContextProvider } from './context/ProductsContext';

import AddProduct    from './routes/AddProduct';
import Home          from './routes/Home';
import UpdateProduct from './routes/UpdateProduct';
import ThemeChooser  from './routes/ThemeChooser';
import Header        from "./components/Header";

import './assets/styles/App.css';
import './assets/styles/themes.css';

function App() {
  return (
    <ProductsContextProvider>
      <div id="app-wrapper" className='default-theme'>
        <Router>
          <Header />
          <Routes>
            <Route path='/'                   element={<Home />} />
            <Route path='/addproduct'         element={<AddProduct    />} />
            <Route path='/product/:id/update' element={<UpdateProduct />} />
            <Route path='/themeChooser'       element={<ThemeChooser  />} />
          </Routes>
        </Router>
      </div>
    </ProductsContextProvider>
  )
}

export default App
