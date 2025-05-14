interface EducationCardProps {
    collegeName: string;
    startDate: string;
    endDate: string;
    major: string;
    gpa: string;
    activities: string[];
    honors: string[];
}

function EducationCard({ collegeName, startDate, endDate, major, gpa, activities, honors }: EducationCardProps) {
    return (
        <div className="w-3/4 mx-6 mt-6 mb-6 flex flex-row items-center justify-between bg-gray-200 rounded-lg shadow-lg p-4 hover:bg-gray-300 transition duration-300">
            <div>
                {/* college on left and start date - end date right */}
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{collegeName}</h2>
                    <p className="text-gray-500 font-semibold">{startDate} - {endDate}</p>
                </div>
                <p className="text-gray-500 font-bold mb-2">{major}, {gpa}</p>

                {/* Should be comma seperated and horizontally aligned */}
                <p className="text-gray-500 mb-2"><span className="font-semibold">Honors: </span>{honors.join(", ")}</p>
                <p className="text-gray-500 mb-2"><span className="font-semibold">Activities: </span>{activities.join(", ")}</p>

            </div>

        </div>

    );
}

export default EducationCard;