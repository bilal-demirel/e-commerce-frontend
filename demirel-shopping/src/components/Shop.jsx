import ShopCategories from "./ShopCategories";
import Shopfilter from "./ShopFilter";
import ShopProducts from "./ShopProducts";
import Sponsors from "./Sponsors";
import Footer from "./Footer";
import Header from "./Header";

export default function Shop(){
    return(
        <>
            <Header />
            <div className="shop-header">
                <h2>Shop</h2>
                <h3>Home || Shop</h3>
            </div>
            <ShopCategories />
            <Shopfilter />
            <ShopProducts />
            <Sponsors />
            <Footer />
        </>
    )
}