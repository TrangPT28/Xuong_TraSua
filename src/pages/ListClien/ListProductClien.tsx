import { Button } from "antd";
const ListProductClien = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      Hero Section
      <section className="relative flex flex-col items-center justify-center text-center py-20">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-75" />
        <div className="relative z-10 max-w-lg p-6 bg-yellow-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Discover Our New Collection</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
          <Button className="mt-4">Shop Now</Button>
        </div>
      </section>

      {/* Browse the Range */}
      <section className="text-center py-10">
        <h3 className="text-xl font-semibold">Browse The Range</h3>
        <p className="text-gray-600">Explore different categories of furniture.</p>
        <div className="grid grid-cols-3 gap-6 mt-6 px-4">
          {['Dining', 'Living', 'Bedroom'].map((category) => (
            <div key={category} className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">{category}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Our Products */}
      <section className="py-10 px-4">
        <h3 className="text-xl font-semibold text-center">Our Products</h3>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[
            { name: "Sylthfare", price: "$3,000" },
            { name: "Latte", price: "$2,500" },
            { name: "Reneghe", price: "$1,800" },
            { name: "Grito", price: "$1,200" },
            { name: "Muggo", price: "$2,000" },
            { name: "Friggly", price: "$1,500" }
          ].map((product) => (
            <div key={product.name} className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
              <Button className="mt-2">Add to Cart</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ListProductClien;