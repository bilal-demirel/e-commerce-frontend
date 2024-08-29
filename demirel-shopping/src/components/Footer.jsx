export default function Footer() {
    return (
        <>
            <div className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start mb-8">
                        <h1 className="text-3xl font-bold mb-4 md:mb-0">Demirel Shopping</h1>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white text-2xl hover:text-gray-400 transition duration-300">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#" className="text-white text-2xl hover:text-gray-400 transition duration-300">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white text-2xl hover:text-gray-400 transition duration-300">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Company Info</h2>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">About Us</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">Our Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Legal</h2>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Features</h2>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">Feature 1</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">Feature 2</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Resources</h2>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">Help Center</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition duration-300">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
                            <form>
                                <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 mb-4 border border-gray-700 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center text-gray-400">
                        <p className="text-sm">Made with Love By Turkey All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}