import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/index.css';
import { ProductsContextProvider } from './context/ProductsContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </StrictMode>,
)
