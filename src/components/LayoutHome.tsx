import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";

interface LayoutHomeProps {
    children?: React.ReactNode;
}

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
    return (

        <div>
            <Header>

            </Header>
            <div
                style={{
                    padding: 24,
                    minHeight: 500,
                }}
            >
                {children || <Outlet />}
            </div>
            <Footer>

            </Footer>
        </div>

    );
};
export default LayoutHome;
