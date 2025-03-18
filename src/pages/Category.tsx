import React from 'react'

const Category = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Milk Tea Shop</title>
  {/* Header */}
  <header className="bg-white shadow-md p-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold">🍵 Milk Tea Shop</h1>
    <nav className="space-x-6 text-gray-600">
      <a href="#" className="hover:text-black">
        Home
      </a>
      <a href="#" className="hover:text-black">
        Shop
      </a>
      <a href="#" className="hover:text-black">
        About
      </a>
      <a href="#" className="hover:text-black">
        Contact
      </a>
    </nav>
    <div className="flex space-x-4 text-gray-600">
      <span>👤</span>
      <span>🔍</span>
      <span>❤️</span>
      <span>🛒</span>
    </div>
  </header>
  {/* Banner */}
  <div
    className="relative w-full h-[300px] bg-cover bg-center"
    style={{
      backgroundImage: 'url("https://source.unsplash.com/1600x900/?milk-tea")'
    }}
  >
    <div className="absolute inset-0 bg-black opacity-30" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold">Shop</h1>
      <p className="mt-2 text-sm">Home &gt; Shop</p>
    </div>
  </div>
  {/* Filter Section */}
  <div className="bg-[#F9F1E7] py-4 px-8 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 cursor-pointer">
        <span>💰</span>
        <select className="w-32 border p-2 rounded">
          <option value="">Tất cả</option>
          <option value={50}>Dưới 50k</option>
          <option value={100}>Dưới 100k</option>
          <option value={200}>Dưới 200k</option>
        </select>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <span>📂</span>
        <select className="w-32 border p-2 rounded">
          <option value="">Tất cả</option>
          <option value="Trà sữa trân châu">Trà sữa trân châu</option>
          <option value="Trà sữa matcha">Trà sữa matcha</option>
        </select>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <span>⭐️</span>
        <select className="w-32 border p-2 rounded">
          <option value="">Tất cả</option>
          <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
          <option value={4}>⭐️⭐️⭐️⭐️</option>
        </select>
      </div>
    </div>
  </div>
  {/* Product Section */}
  <div className="container mx-auto py-12">
    {/* <h2 class="text-3xl font-bold mb-8 text-center">Danh Mục Trà Sữa</h2> */}
    <div className="grid grid-cols-4 gap-8">
      {/* Product Cards */}
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Trân Châu Đường Đen</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">50.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea2"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Matcha Kem Cheese</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">65.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea3"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Khoai Môn</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">60.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
      <div className="border rounded-lg p-4 shadow-md bg-white relative">
        <img
          src="https://source.unsplash.com/200x200/?milk-tea4"
          className="w-full h-48 object-cover rounded-lg mb-4"
          alt="Trà Sữa"
        />
        <h3 className="text-lg font-semibold">Trà Sữa Socola</h3>
        <p className="text-gray-600">
          Giá: <span className="text-red-500 font-bold">70.000 VND</span>
        </p>
        <p className="mt-2">⭐⭐⭐⭐</p>
      </div>
    </div>
    {/* Pagination */}
    <div className="flex justify-center mt-8 space-x-4">
      <a href="#" className="px-4 py-2 bg-white border rounded-md">
        1
      </a>
      <a href="#" className="px-4 py-2 bg-white border rounded-md">
        2
      </a>
      <a href="#" className="px-4 py-2 bg-white border rounded-md">
        3
      </a>
      <a href="#" className="px-4 py-2 bg-white border rounded-md">
        Next
      </a>
    </div>
  </div>
  {/* Footer */}
  <footer className="bg-gray-100 py-8 text-center">
    <p>© 2025 Milk Tea Shop. All rights reserved.</p>
  </footer>
</>

    </div>
  )
}

export default Category