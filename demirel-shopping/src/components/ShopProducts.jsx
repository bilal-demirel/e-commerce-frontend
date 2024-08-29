import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Clothes from "../assets/shop-clothes.jpg";
import Shoes from "../assets/shop-shoes.jpg";
import ProductCard from "./ProductCard";

export default function ShopProducts() {
    const products = [
        {
            id: 1,
            image: Clothes,
            name: "Best Dress Ever",
            department: "Clothes Department",
            regularPrice: 20,
            discountedPrice: 10
        },
        {
            id: 2,
            image: Shoes,
            name: "Best Shoe Ever",
            department: "Shoe Department",
            regularPrice: 40,
            discountedPrice: 20
        }
    ]

    const history = useHistory();

    const toProductDetails = () => {
        history.push("/order");
    }

    return (
        <>
            <div className="p-4 bg-gray-100 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            department={product.department}
                            regularPrice={product.regularPrice}
                            discountedPrice={product.discountedPrice}
                        />
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                            Previous
                        </button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}