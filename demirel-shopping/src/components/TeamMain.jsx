import TeamCard1 from "../assets/team-card-1.jfif";
import TeamCard2 from "../assets/team-card-2.jfif";
import TeamCard3 from "../assets/team-card-3.jfif";
import TeamCard4 from "../assets/team-card-4.jfif";
import TeamCard5 from "../assets/team-card-5.jfif";
import TeamCard6 from "../assets/team-card-6.jfif";
import TeamCard7 from "../assets/team-card-7.jfif";
import TeamCard8 from "../assets/team-card-8.jfif";

export default function TeamMain() {
    return (
        <>
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h1>
                        <p className="text-lg text-gray-600">
                            Problems trying to resolve the conflict between the two major realms of Classic physics. Newtonian mechanics
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
                            <img src={TeamCard1} alt="Jerome Bell" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Erhan Fırat</h2>
                            <p className="text-gray-600">Project Owner</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
                            <img src={TeamCard2} alt="Brooklyn Simmons" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gökhan Özdemir</h2>
                            <p className="text-gray-600">Scrum Master</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
                            <img src={TeamCard3} alt="Ronald Richards" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Bilal Demirel</h2>
                            <p className="text-gray-600">Senior Full-Stack Developer</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
                            <img src={TeamCard4} alt="Floyd Miles" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Floyd Miles</h2>
                            <p className="text-gray-600">Facebook</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
                            <img src={TeamCard5} alt="Jane Cooper" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Jane Cooper</h2>
                            <p className="text-gray-600">Mitsubishi</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
                            <img src={TeamCard6} alt="Robert Fox" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Robert Fox</h2>
                            <p className="text-gray-600">IBM</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
                            <img src={TeamCard7} alt="Leslie Alexander" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Leslie Alexander</h2>
                            <p className="text-gray-600">The Walt Disney Company</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
                            <img src={TeamCard8} alt="Jacob Jones" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Jacob Jones</h2>
                            <p className="text-gray-600">Starbucks</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}