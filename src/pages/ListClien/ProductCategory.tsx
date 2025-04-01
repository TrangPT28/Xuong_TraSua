import { useState } from "react";
import { Button, Input, Checkbox, Slider, Select, Pagination } from "antd";
import { Link } from "react-router-dom";
import useList from "../../Hooks/useList";

const { Search } = Input;
const { Option } = Select;

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

interface Category {
  id: number;
  name: string;
}

const ProductCategory = () => {
  const { data: products } = useList({ resource: "products" });
  const { data: categories } = useList({ resource: "categories" });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const handleSearch = (value: string) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const filteredProducts = products?.data
    ?.filter((product: Product) => product.name.toLowerCase().includes(searchQuery))
    ?.filter((product: Product) =>
      selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true
    )
    ?.filter((product: Product) => product.price >= priceRange[0] && product.price <= priceRange[1]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md col-span-1">
          <h2 className="font-semibold text-lg">Filters</h2>
          <Search placeholder="Search products" className="mt-2" allowClear onSearch={handleSearch} />
          <h3 className="font-semibold mt-4">Categories</h3>
          {categories?.data.map((category: Category) => (
            <Checkbox
              key={category.id}
              className="block"
              onChange={(e) => handleCategoryChange(category.name, e.target.checked)}
            >
              {category.name}
            </Checkbox>
          ))}
          <h3 className="font-semibold mt-4">Price Range</h3>
          <Slider range defaultValue={priceRange} max={1000} onChange={(value) => setPriceRange(value as [number, number])} />
          <Button className="w-full mt-4" onClick={() => {
            setSearchQuery("");
            setSelectedCategories([]);
            setPriceRange([0, 1000]);
          }}>Reset Filters</Button>
        </div>

        <div className="col-span-3">
          <div className="flex justify-between items-center">
            <p>Showing {products?.data?.length} of {products?.data?.length} products</p>
            <Select defaultValue="Newest" className="w-32">
              <Option value="Newest">Newest</Option>
              <Option value="PriceLow">Price: Low to High</Option>
              <Option value="PriceHigh">Price: High to Low</Option>
            </Select>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            {products?.data?.map((product: Product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img src={product.image} alt={product.name} className="mx-auto" />
                <h4 className="text-lg font-semibold mt-2">{product.name}</h4>
                <p className="text-gray-600">{product.price}VND</p>
                <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded-md">In Stock</span>
                <Link to={`detail/${product.id}`}>
                  <Button className="mt-2 w-full bg-blue-500 text-white">Add to Cart</Button>
                </Link>
              </div>
            ))}
          </div>
          <br />
          <div>   
          <Pagination
            current={currentPage}
            total={filteredProducts?.length || 0}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
            className="mt-6"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
