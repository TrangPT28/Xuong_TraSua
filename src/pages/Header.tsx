import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                {/* <img src={logo} alt="logo" /> */}
            </div>
            <div className="header__search">
                <input type="text" placeholder="Tìm kiếm" />
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div className="header__cart">
                <Link to="/">
                    <i className="fas fa-shopping-cart"></i>
                </Link>
                <span>0</span>
            </div>
        </div>
    );
};

export default Header;
