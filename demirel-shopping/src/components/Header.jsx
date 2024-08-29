import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../css/header.css";

export default function Header() {
    const history = useHistory();
    function toSignupPage(){
        history.push("/signup");
    }

    return (
        <>
            <div className="bg-gray-100 p-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                        <div className="flex items-center space-x-2">
                            <i className="fa fa-phone"></i>
                            <span>(225) 555-0118</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fa fa-envelope"></i>
                            <span>michelle.rivera@example.com</span>
                        </div>
                    </div>
                    <div className="text-center md:text-left mt-4 md:mt-0">
                        <h2 className="text-lg font-semibold">Follow Us and get a chance to win 80% off</h2>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-white hover:text-gray-200"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="text-white hover:text-gray-200"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="text-white hover:text-gray-200"><i className="fa fa-youtube"></i></a>
                        <a href="#" className="text-white hover:text-gray-200"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl font-bold">Demirel Shopping</div>
                    <nav className="flex space-x-4 mt-2 md:mt-0">
                        <a href="/home" className="text-gray-700 hover:text-blue-500">Home</a>
                        <a href="/shop" className="text-gray-700 hover:text-blue-500">Shop</a>
                        <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
                        <a href="/blog" className="text-gray-700 hover:text-blue-500">Blog</a>
                        <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
                        <a href="/pages" className="text-gray-700 hover:text-blue-500">Pages</a>
                        <a href="/team" className="text-gray-700 hover:text-blue-500">Team</a>
                    </nav>
                    <nav className="flex space-x-4 mt-2 md:mt-0">
                        <i className="fa fa-user-o text-gray-700 hover:text-blue-500"></i>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={toSignupPage}>Login / Register</button>
                        <i className="fa fa-search text-gray-700 hover:text-blue-500"></i>
                        <i className="fa fa-shopping-cart text-gray-700 hover:text-blue-500"></i>
                        <i className="fa fa-heart text-gray-700 hover:text-blue-500"></i>
                    </nav>
                </div>
            </div>
        </>
    )
}