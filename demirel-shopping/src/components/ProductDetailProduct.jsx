export default function ProductDetailProduct(props) {
    const {product} = props;
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.department}</p>
                <p className="text-gray-700 mb-4">
                    It is the most beautiful dress you ever seen. If you don't buy it, you will be unhappy. You must buy it to be happy.
                </p>
                <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xl font-semibold text-gray-800 line-through">${product.regularPrice}</span>
                    <span className="text-2xl font-bold text-red-500">${product.discountedPrice}</span>
                </div>
            </div>
        </div>
    )
}