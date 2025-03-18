import "remixicon/fonts/remixicon.css";

const Cart = () => {
  return (
    <>
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
    </>
  );
};

export default Cart;
