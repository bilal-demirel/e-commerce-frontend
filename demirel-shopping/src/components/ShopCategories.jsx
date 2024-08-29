import Clothes from "../assets/shop-clothes.jpg";
import Shoes from "../assets/shop-shoes.jpg";
import Acc from "../assets/shop-acc.jpg";
import Socks from "../assets/shop-socks.jpg";
import Bag from "../assets/shop-bag.jpg";

export default function ShopCategories() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100">
                <div className="flex-1 min-w-[150px] max-w-[200px] flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
                    <img src={Clothes} alt="Clothes" className="w-full h-auto rounded-lg" />
                </div>
                <div className="flex-1 min-w-[150px] max-w-[200px] flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
                    <img src={Shoes} alt="Shoes" className="w-full h-auto rounded-lg" />
                </div>
                <div className="flex-1 min-w-[150px] max-w-[200px] flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
                    <img src={Acc} alt="Acc" className="w-full h-auto rounded-lg" />
                </div>
                <div className="flex-1 min-w-[150px] max-w-[200px] flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
                    <img src={Socks} alt="Socks" className="w-full h-auto rounded-lg" />
                </div>
                <div className="flex-1 min-w-[150px] max-w-[200px] flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
                    <img src={Bag} alt="Bag" className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </>
    )
}