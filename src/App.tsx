
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Authenticated from './components/Authenticated'
import ListProducts from './pages/ListProducts'
import AddProducts from './pages/Products/_components/AddProducts'
import LayoutAdmin from './components/LayoutAdmin'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LayoutHome from './components/LayoutHome'
import Cart from './pages/Cart'
import Register from './pages/Register'

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
            <Route path='update/:id' element={<AddProducts />} />
          </Route>

        </Route>

        <Route path="login" element={<Login />} />
        <Route path='register' element={<Register/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

        <Route path='home'
          element={
            <Authenticated fallback={<Navigate to='login' />}>
              <LayoutHome>
                <Outlet />
              </LayoutHome>
            </Authenticated>
          } />
          <Route path='home'>
            <Route path='cart' element={<Cart/>} />


          </Route>


      </Routes>

    </>
  )
}

export default App
