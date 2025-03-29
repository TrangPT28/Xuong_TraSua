
import { useState } from "react"
import { Image } from "antd"
import Link from "antd/es/typography/Link"
import { Heart, Facebook, Twitter, Minus, Plus } from "lucide-react"
import useOne from "../../Hooks/useOne"
import { useParams } from "react-router-dom"

export default function ProductPage() {
  const { id } = useParams()
  const { data } = useOne({ resource: "products", id: Number(id) })
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("Description")
  const [selectedColor, setSelectedColor] = useState("purple")

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className="min-h-screen bg-[#ffffff]">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-[#9f9f9f] mb-8">
          <Link href="/" className="hover:text-[#b88e2f]">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/shop" className="hover:text-[#b88e2f]">
            Shop
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#000000]">{data?.data.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="flex">
           
            <div className="flex-1 bg-[#f9f1e7] rounded-lg overflow-hidden">
              <Image
                src={data?.data?.image}
                alt="Asgaard sofa"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-medium mb-2">{data?.data.name}</h1>
            <p className="text-2xl text-[#b88e2f] mb-3">{data?.data.price}đ</p>

            {/* <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${star <= 4 ? "text-[#b88e2f]" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">5 Customer Review</span>
            </div> */}
            {/* Size Selection */}
            {/* <div className="mb-6">
              <p className="text-sm mb-2">Size</p>
              <div className="flex space-x-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`w-10 h-10 flex items-center justify-center border ${
                      selectedSize === size ? "bg-[#b88e2f] text-white border-[#b88e2f]" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Color Selection */}
            <div className="mb-8">
              <p className="text-sm mb-2">Color</p>
              <div className="flex space-x-4">
                <button
                  className={`w-8 h-8 rounded-full bg-[#816dfa] ${selectedColor === "purple" ? "ring-2 ring-offset-2 ring-[#b88e2f]" : ""}`}
                  onClick={() => setSelectedColor("purple")}
                />
                <button
                  className={`w-8 h-8 rounded-full bg-black ${selectedColor === "black" ? "ring-2 ring-offset-2 ring-[#b88e2f]" : ""}`}
                  onClick={() => setSelectedColor("black")}
                />
                <button
                  className={`w-8 h-8 rounded-full bg-[#b88e2f] ${selectedColor === "gold" ? "ring-2 ring-offset-2 ring-[#b88e2f]" : ""}`}
                  onClick={() => setSelectedColor("gold")}
                />
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-gray-300">
                <button className="w-10 h-10 flex items-center justify-center" onClick={decrementQuantity}>
                  <Minus size={16} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center">{quantity}</span>
                <button className="w-10 h-10 flex items-center justify-center" onClick={incrementQuantity}>
                  <Plus size={16} />
                </button>
              </div>
              <button className="bg-[#b88e2f] text-white px-6 py-2 rounded">Add To Cart</button>
              <button className="border border-gray-300 p-2 rounded">
                <Heart size={20} />
              </button>
            </div>

            {/* Product Info */}
            <div className="space-y-2 text-sm border-t border-gray-200 pt-6">
              <div className="flex">
                <span className="w-24 text-[#9f9f9f]">SKU</span>
                <span>: SS001</span>
              </div>
              <div className="flex">
                <span className="w-24 text-[#9f9f9f]">Category</span>
                <span>: Sofas</span>
              </div>
              <div className="flex">
                <span className="w-24 text-[#9f9f9f]">Tags</span>
                <span>: Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex items-center pt-2">
                <span className="w-24 text-[#9f9f9f]">Share</span>
                <div className="flex space-x-3">
                  <Facebook size={16} />
                  <Twitter size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="flex border-b border-gray-200 mb-8">
            {["Description", "Additional Information", "Reviews (5)"].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-6 text-lg ${
                  activeTab === tab ? "border-b-2 border-[#b88e2f] font-medium" : "text-[#9f9f9f]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-[#9f9f9f] leading-relaxed">
            <p className="mb-4">
            {data?.data.description}
            </p>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#f9f1e7] p-4 rounded">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Sofa view 1"
                  width={500}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-[#f9f1e7] p-4 rounded">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Sofa view 2"
                  width={500}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* Related Products */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-medium text-center mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                name: "Syltherine",
                description: "Stylish cafe chair",
                price: "Rp 2,500,000",
                oldPrice: "Rp 3,500,000",
                discount: "-30%",
              },
              {
                id: 2,
                name: "Leviosa",
                description: "Stylish cafe chair",
                price: "Rp 2,500,000",
                discount: null,
              },
              {
                id: 3,
                name: "Lolito",
                description: "Luxury big sofa",
                price: "Rp 7,000,000",
                oldPrice: "Rp 14,000,000",
                discount: "-50%",
              },
              {
                id: 4,
                name: "Respira",
                description: "Outdoor bar table and stool",
                price: "Rp 500,000",
                discount: "New",
              },
            ].map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative bg-[#f9f1e7] aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  {product.discount && (
                    <div
                      className={`absolute top-4 right-4 ${
                        product.discount === "New" ? "bg-[#2ec1ac]" : "bg-[#e97171]"
                      } text-white text-xs px-3 py-1 rounded`}
                    >
                      {product.discount}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-black px-4 py-2 rounded">Add to cart</button>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-[#898989]">{product.description}</p>
                  <div className="flex items-center mt-1">
                    <span className="font-medium">{product.price}</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-sm text-[#b0b0b0] line-through">{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="border border-[#b88e2f] text-[#b88e2f] px-8 py-2 hover:bg-[#b88e2f] hover:text-white transition-colors">
              Show More
            </button>
          </div>
        </div> */}
      </main>

      {/* Shopping Cart Sidebar */}
     

      {/* Footer */}
      <footer className="bg-[#f9f1e7] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Furniro.</h3>
              <p className="text-sm text-[#9f9f9f] mb-4">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>

            <div>
              <h4 className="text-[#9f9f9f] mb-4">Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm hover:text-[#b88e2f]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-sm hover:text-[#b88e2f]">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm hover:text-[#b88e2f]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-[#b88e2f]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#9f9f9f] mb-4">Help</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm hover:text-[#b88e2f]">
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-[#b88e2f]">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-[#b88e2f]">
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#9f9f9f] mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 border-b border-[#9f9f9f] bg-transparent py-1 px-2 text-sm focus:outline-none"
                />
                <button className="bg-[#b88e2f] text-white px-4 py-1 text-sm">Theo dõi</button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-[#9f9f9f]">
            2023 furniro. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

