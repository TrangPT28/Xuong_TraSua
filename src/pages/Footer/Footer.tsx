const Footer = () => {
    return (
        <>
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
    )
};

export default Footer;