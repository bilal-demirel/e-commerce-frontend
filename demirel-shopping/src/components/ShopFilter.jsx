export default function Shopfilter() {
    return (
        <>
            <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold text-gray-800">Showing all results</h3>
                    <h3 className="text-lg font-semibold text-gray-800">Views:</h3>
                </div>
                <div className="flex space-x-4">
                    <i className="fa fa-list-alt text-gray-600 text-xl hover:text-blue-500 cursor-pointer transition-colors duration-300"></i>
                    <i className="fa fa-list text-gray-600 text-xl hover:text-blue-500 cursor-pointer transition-colors duration-300"></i>
                </div>
            </div>
        </>
    )
}