import { Link } from "react-router-dom";

import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
const Header = () => {
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800 flex items-center">
                    <span className="text-yellow-600 text-3xl">⚠️</span>
                    <span className="ml-2">Furniro</span>
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex space-x-6 text-gray-600 font-medium">
                        <li className="hover:text-black cursor-pointer"><Link to="ListProductClien">Home</Link></li>
                        <li className="hover:text-black cursor-pointer"><Link to="Category">Shop</Link></li>
                        <li className="hover:text-black cursor-pointer">About</li>
                        <li className="hover:text-black cursor-pointer">Contact</li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="flex space-x-4 text-gray-600">
                    <Link to="Login">
                        <FaUser className="text-xl hover:text-black cursor-pointer" />
                    </Link>

                    <FaSearch className="text-xl hover:text-black cursor-pointer" />
                    <FaHeart className="text-xl hover:text-black cursor-pointer" />

                    <Link to="cart">
                        <FaShoppingCart className="text-xl hover:text-black cursor-pointer" />
                    </Link>

                </div>
            </div>
        </header>
    );
};

export default Header;
