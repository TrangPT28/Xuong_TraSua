
import { AuthenticatedProps } from "../Types/typerAuthen";


const Authenticated = ({ children, fallback }: AuthenticatedProps) => {
    return children ? <>{children}</> : <>{fallback}</>;
};

export default Authenticated;
