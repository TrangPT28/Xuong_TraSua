import { Button } from "antd";
import { Link } from "react-router-dom";
import useList from "../../Hooks/useList";
const ListProductClien = () => {

  const { data : products } = useList({ resource: "products"})
  const { data : category } = useList({ resource: "categories"})
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Browse the Range */}
      <section className="text-center py-10">
        <h3 className="text-xl font-semibold">Browse The Range</h3>
        <p className="text-gray-600">Explore different categories of furniture.</p>
        <div className="grid grid-cols-3 gap-6 mt-6 px-4">
          {category?.data.map((category : any) => (
            <div key={category} className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">{category.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Our Products */}
      <section className="py-10 px-4">
        <h3 className="text-xl font-semibold text-center">Our Products</h3>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {products?.data.map((product : any) => (
            <Link to={`detail/${product.id}`} key={product.name}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={product.image} alt="" />
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-gray-600">{product.price}</p>
                <Button className="mt-2">Add to Cart</Button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ListProductClien;