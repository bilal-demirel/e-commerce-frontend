export default function ContactMain() {
    return (
        <>
            <div className="bg-gray-50 py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Get answers to all your questions.
                    </h1>
                    <h3 className="text-lg text-gray-600 mb-6">
                        Problems trying to resolve the conflict between two major realms of Classic physics.
                    </h3>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
                        CONTACT OUR COMPANY
                    </button>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-300">
                            <i className="fa fa-facebook text-2xl"></i>
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300">
                            <i className="fa fa-twitter text-2xl"></i>
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-700 transition duration-300">
                            <i className="fa fa-youtube text-2xl"></i>
                        </a>
                        <a href="#" className="text-pink-500 hover:text-pink-600 transition duration-300">
                            <i className="fa fa-instagram text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}