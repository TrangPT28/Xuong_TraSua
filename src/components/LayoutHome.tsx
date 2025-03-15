
interface LayoutHomeProps {
    children?: React.ReactNode;
}

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};
export default LayoutHome;