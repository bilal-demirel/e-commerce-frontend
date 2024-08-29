import React from "react";
import { Link } from 'react-router-dom';

export default function ProductCardSuggestions({ id, image, name, department, regularPrice, discountedPrice }) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <Link to={`/product/${id}`}>
                <img className="w-full h-48 object-cover" src={image} alt={name} />
            </Link>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">{department}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">${regularPrice}</span>
                    <span className="text-lg font-semibold text-gray-900">${discountedPrice}</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
                        Sepete Ekle
                    </button>
                </div>
            </div>
        </div>
    );
}