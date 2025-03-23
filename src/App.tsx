
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Authenticated from './components/Authenticated'
import LayoutAdmin from './components/LayoutAdmin'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard'
import LayoutHome from './components/LayoutHome'
import Cart from './pages/Cart/Cart'
import CartDetail from './pages/Cart/CartDetail'
import ListProductClien from './pages/ListClien/ListProductClien'
import ProductEdit from './pages/Products/edit'
import ProductAdd from './pages/Products/creater'
import ProductDetail from './pages/ListClien/ProductDetail'
import PostsPage from './pages/Products/listProducts'


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
            <Route index element={<PostsPage />} />
            <Route path='add' element={<ProductAdd />} />
            <Route path='update/:id' element={<ProductEdit />} />
            <Route path='cartdetail' element={<CartDetail />} />
          </Route>

        </Route>
        <Route path="login" element={<Login />} />
        <Route path=''
          element={
            <Authenticated fallback={<Navigate to='login' />}>
              <LayoutHome>
                <Outlet />
              </LayoutHome>
            </Authenticated>
          }>
          <Route index element={<Navigate to='ListProductClien' />} />
          <Route path='ListProductClien'>
            <Route index element={<ListProductClien />} />
            <Route path='detail' element={<ProductDetail />} />
          </Route>
          
          <Route path='cart' element={<Cart />} />
        </Route>

        
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

    </>
  )
}

export default App
