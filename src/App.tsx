
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Authenticated from './components/Authenticated'
import AddProducts from './pages/Products/_components/AddProducts'
import LayoutAdmin from './components/LayoutAdmin'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LayoutHome from './components/LayoutHome'
import Cart from './pages/Cart'
import UpdateProducts from './pages/Products/_components/UpdateProducts'
import ProductDetail from './pages/Products/_components/ProductDetail'
import CartDetail from './pages/CartDetail'
import ListProducts from './pages/Products/_components/ListProducts'
import ListProductClien from './pages/ListProductClien'


function App() {


  return (
    <>
      <Routes>
        <Route path='admin'
          element={
            <Authenticated fallback={<Navigate to='login' />}>
              <LayoutAdmin>
                <Outlet />
              </LayoutAdmin>
            </Authenticated>}>

          <Route index element={<Navigate to='dashboard' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ListProducts />} />
            <Route path='add' element={<AddProducts />} />
            <Route path='update/:id' element={<UpdateProducts />} />
          </Route>
          <Route path='cartdetail' element={<CartDetail />} />

        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

        <Route path='home'
          element={
            <Authenticated fallback={<Navigate to='login' />}>
              <LayoutHome>
                <Outlet />
              </LayoutHome>
            </Authenticated>
          }>
          <Route index element={<Navigate to='ListProductClien' />} />
          <Route path='cart' element={<Cart />} />
          <Route path='ListProductClien'>
            <Route index element={<ListProductClien />} />
            <Route path='products/detail' element={<ProductDetail />} />
          </Route>

        </Route>
      </Routes>

    </>
  )
}

export default App
