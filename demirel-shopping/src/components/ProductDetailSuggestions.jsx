import ProductCardSuggestions from "./ProductCardSuggestions"
import Acc from "../assets/shop-acc.jpg";
import Socks from "../assets/shop-socks.jpg";
import Bag from "../assets/shop-bag.jpg";

export default function ProductDetailSuggestions() {

    const products = [
        {
            id: 1,
            image: Bag,
            name: "Best Bag Ever",
            department: "Bag Department",
            regularPrice: 20,
            discountedPrice: 10
        },
        {
            id: 2,
            image: Acc,
            name: "Best Acc Ever",
            department: "Acc Department",
            regularPrice: 140,
            discountedPrice: 70
        },
        {
            id: 3,
            image: Socks,
            name: "Best Socks Ever",
            department: "Socks Department",
            regularPrice: 10,
            discountedPrice: 5
        }
    ]

    return (
        <>
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        BESTSELLER PRODUCTS
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map(product => (
                            <ProductCardSuggestions
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
                </div>
            </div>
        </>
    )
}