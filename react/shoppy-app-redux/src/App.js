import './styles/cgvSignup.css';
import './styles/cgv.css';
import './styles/commons.css';
import './styles/shoppy.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx'
import { Products } from './pages/Products.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';
import { CheckoutInfo } from './pages/CheckoutInfo.jsx';
import { Support } from './pages/Support.jsx';
import { CartProvider } from '../src/context/CartContext.js';
import { AuthProvider } from '../src/context/AuthContext.js';
import { ProductProvider } from './context/ProductContext.js';
import { ProtectedPageRoute } from './pages/ProtectedPageRoute.js';

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='/all' element={<Products/>} />
                <Route path='/cart' element={
                  <ProtectedPageRoute>
                    <Cart/>
                  </ProtectedPageRoute>
                } />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/products/:pid' element={<ProductDetail/>}/>
                <Route path='/checkout' element={
                  <ProtectedPageRoute>
                    <CheckoutInfo/>
                  </ProtectedPageRoute> }/>
                <Route path='/support' element={
                  <ProtectedPageRoute>
                    <Support/>
                  </ProtectedPageRoute> }/>
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}