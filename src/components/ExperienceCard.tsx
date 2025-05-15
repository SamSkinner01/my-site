interface ExperienceCardProps {
    companyName: string;
    startDate: string;
    endDate: string;
    position: string;
    description: string[];
    technologies: string[];
}

function ExperienceCard({ companyName, startDate, endDate, position, description, technologies }: ExperienceCardProps) {
    return (
        <div className="w-3/4 mx-6 mt-6 mb-6 flex flex-row items-center justify-between bg-gray-200 rounded-lg shadow-lg p-4 hover:bg-gray-300 transition duration-300 ease-in-out">
            <div>
                <div className="flex flex-col md:flex-row md:justify-between justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{companyName}</h2>
                    <p className="text-gray-500 font-semibold mb-2">{startDate} - {endDate}</p>
                </div>
                <p className="text-gray-500 font-bold mb-2">{position}</p>

                <div className="mb-2">
                    <ul className="list-disc list-inside">
                        {description.map((desc, index) => (
                            <li key={index} className="text-gray-500 mb-4">{desc}</li>
                        ))}
                    </ul>
                </div>

                <p className="text-gray-500 mb-2"><span className="font-semibold">Technologies: </span>{technologies.join(", ")}</p>
            </div>
        </div>
    );
}
export default ExperienceCard;