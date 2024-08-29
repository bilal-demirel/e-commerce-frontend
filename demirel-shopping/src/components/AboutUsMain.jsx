import AboutPoster from "../assets/about-us.png";

export default function AboutUsMain() {
    return (
        <>
            <div className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">About Company</h2>
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT US</h1>
                            <h2 className="text-lg text-gray-600 mb-6">
                                We know how large objects will act, but things on a small scale
                            </h2>
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
                                Get Quote Now
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <img src={AboutPoster} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}