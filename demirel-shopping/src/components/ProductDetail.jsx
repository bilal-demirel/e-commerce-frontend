import { useParams } from "react-router-dom";
import Clothes from "../assets/shop-clothes.jpg";
import Socks from "../assets/shop-socks.jpg";
import Header from "./Header";
import ProductDetailSuggestions from "./ProductDetailSuggestions";
import Sponsors from "./Sponsors";
import Footer from "./Footer";
import ProductDetailProduct from "./ProductDetailProduct";

export default function ProductDetail() {
    const { id } = useParams();
    let product = {};
    if (id == 1) {
        product = {
            id: id,
            image: Clothes,
            name: "Best Dress Ever",
            department: "Clothes Department",
            regularPrice: 20,
            discountedPrice: 10,
        };
    } else {
        product = {
            id: id,
            image: Socks,
            name: "Best Dress Ever",
            department: "Clothes Department",
            regularPrice: 20,
            discountedPrice: 10,
        };
    }

    return (
        <>
            <Header />
            <ProductDetailProduct product={product}/>
            <ProductDetailSuggestions />
            <Sponsors />
            <Footer />
        </>
    );
}