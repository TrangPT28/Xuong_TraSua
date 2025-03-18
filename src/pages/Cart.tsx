import "remixicon/fonts/remixicon.css";

const Cart = () => {
  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-700 text-2xl font-bold">&#x1F54A;</span>
          <span className="text-xl font-semibold">Furniro</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-700">
            <li>
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-black">
            &#128100;
          </a>
          <a href="#" className="hover:text-black">
            &#128269;
          </a>
          <a href="#" className="hover:text-black">
            &#10084;
          </a>
          <a href="#" className="hover:text-black">
            &#128717;
          </a>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gray-100 text-center h-[318px] flex flex-col justify-center">
        <h1 className="text-3xl font-bold">Cart</h1>
        <p className="text-gray-500">Home &gt; Cart</p>
      </div>

      <div className="max-w-7xl mx-auto p-7">
        {/* Cart Table & Cart Totals Container */}
        <div className="mt-8 flex flex-col lg:flex-row gap-6 items-start">
          {/* Cart Table */}
          <div className="bg-white rounded-lg p-1 flex-1">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F9F1E7]">
                  <th className="p-6 text-left text-lg font-semibold">
                    Product
                  </th>
                  <th className="p-6 text-left text-lg font-semibold">Price</th>
                  <th className="p-6 text-left text-lg font-semibold">
                    Quantity
                  </th>
                  <th className="p-6 text-left text-lg font-semibold">
                    Subtotal
                  </th>
                  <th className="p-6 text-center text-lg font-semibold">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="p-6 flex items-center space-x-6">
                    <img
                      src="/sofa.jpg"
                      alt="Asgaard sofa"
                      className="w-20 h-20 rounded-lg border border-gray-300"
                    />
                    <span className="text-gray-600 text-lg font-medium">
                      Asgaard sofa
                    </span>
                  </td>
                  <td className="p-6 text-gray-500 text-lg">Rs. 250,000.00</td>
                  <td className="p-6">
                    <input
                      type="number"
                      className="w-16 border rounded-md text-center text-lg font-medium p-2"
                      value="1"
                    />
                  </td>
                  <td className="p-6 text-gray-800 text-lg font-semibold">
                    Rs. 250,000.00
                  </td>
                  
                    <i className="ri-delete-bin-6-line text-[#B88E2F] text-2xl font-bold flex justify-between items-center p-12"></i>
                  
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#F9F1E7] p-6 w-full lg:w-1/3 mx-auto text-center">
            <h2 className="text-2xl font-bold">Cart Totals</h2>

            <div className="flex justify-between items-center mt-6 px-4">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-gray-500 text-lg">Rs. 250,000.00</span>
            </div>

            <div className="flex justify-between items-center mt-12 px-4">
              <span className="text-xl font-bold">Total</span>
              <span className="text-yellow-700 text-xl font-bold">
                Rs. 250,000.00
              </span>
            </div>

            <button className="mt-10 w-full border border-black text-black font-semibold py-3 rounded-md hover:bg-black hover:text-white transition">
              Check Out
            </button>
          </div>
        </div>
      </div>

      {/* service */}
      <div className="w-full bg-[#F9F1E7] py-16">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* High Quality */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🏆</span>
            <div>
              <p className="text-lg font-bold text-gray-900">High Quality</p>
              <p className="text-gray-500">crafted from top materials</p>
            </div>
          </div>

          {/* Warranty Protection */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl">✅</span>
            <div>
              <p className="text-lg font-bold text-gray-900">
                Warranty Protection
              </p>
              <p className="text-gray-500">Over 2 years</p>
            </div>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl">📦</span>
            <div>
              <p className="text-lg font-bold text-gray-900">Free Shipping</p>
              <p className="text-gray-500">Order over 150$</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🎧</span>
            <div>
              <p className="text-lg font-bold text-gray-900">24 / 7 Support</p>
              <p className="text-gray-500">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white w-full py-12 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-4 gap-8">
          {/* Logo + Address */}
          <div>
            <h2 className="text-2xl font-bold">Funiro.</h2>
            <p className="text-gray-500 mt-2">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-400 font-semibold">Links</h3>
            <ul className="mt-2 space-y-2 py-2">
              <li className="text-black py-2">Home</li>
              <li className="text-black py-2">Shop</li>
              <li className="text-black py-2">About</li>
              <li className="text-black py-2">Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-400 font-semibold">Help</h3>
            <ul className="mt-2 space-y-2 py-2">
              <li className="text-black py-2">Payment Options</li>
              <li className="text-black py-2">Returns</li>
              <li className="text-black py-2">Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-400 font-semibold">Newsletter</h3>
            <div className="mt-2 flex  border-gray-400 gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 bg-transparent outline-none text-gray-600 border-b"
              />
              <button className="text-black font-semibold border-b">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-500">
          2023 funiro. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Cart;
