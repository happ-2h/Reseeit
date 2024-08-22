import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProductsContext } from './context/ProductsContext';

import AddProduct    from './routes/AddProduct';
import Home          from './routes/Home';
import UpdateProduct from './routes/UpdateProduct';
import ThemeChooser  from './routes/ThemeChooser';
import Header        from "./components/Header";

import './assets/styles/App.css';
import './assets/styles/themes.css';

function App() {
  const { theme, setTheme } = useContext(ProductsContext);

  useEffect(() => {
    const lastTheme = localStorage.getItem("theme");

    if (lastTheme) {
      setTheme(lastTheme);
    }
  }, []);

  return (
      <div id="app-wrapper" className={theme || "default-theme"}>
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
  )
}

export default App
