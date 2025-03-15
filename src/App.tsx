import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import MilkteaList from "./pages/products/list";
import Authenticated from "./components/Authenticated";
import LayoutAdmin from "./components/LayoutAdmin";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="admin"
          element={
            <Authenticated fallback={<Navigate to="/login" />}>
              <LayoutAdmin>
                <Outlet />
              </LayoutAdmin>
            </Authenticated>
          }
        >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<h2>Dashboard</h2>} />

          <Route path="products">
            <Route index element={<MilkteaList />} />
            {/* <Route path="layout" element={<Layouts />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path="edit/:id" element={<ProductEdit />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
