import leftPoster from "../assets/poster-left.jpg";
import rightPoster from "../assets/poster-right.jpg";

export default function HomePoster() {
    return (
        <>
            <div className="flex items-center justify-between p-4 bg-gray-100">
                <div className="flex-1">
                    <img src={leftPoster} alt="Poster Left" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="flex-1 text-center p-4">
                    <h1 className="text-3xl font-bold mb-2">Multicoloured Tie-dye Sweater</h1>
                    <h3 className="text-xl text-gray-700 mb-4">We know how large objects will act.</h3>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        SHOP NOW
                    </button>
                </div>
                <div className="flex-1">
                    <img src={rightPoster} alt="Poster Right" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </>
    )
}