import { Route, Routes } from "react-router-dom";
import MilkteaList from "./pages/products/list";
function App() {
    return (
        <>
            <Routes>
                <Route path="milkteas">
                    <Route index element={<MilkteaList />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
