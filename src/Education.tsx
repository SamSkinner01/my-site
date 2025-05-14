import EducationCard from "./components/EducationCard";

const education = [
    {
        collegeName: "Manhattan College",
        startDate: "August 2019",
        endDate: "May 2023",
        major: "Computer Science",
        gpa: "3.85/4.0",
        honors: ["Epsilon Sigma Pi", "The Brother John McNamara Medal", "Dean’s List"],
        activities: ["ACM E-Board (Organized Events)"],
    },
];

function Education() {
    return (
        <div className="w-3/4 mx-auto mt-6 mb-6 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-600 mb-4 mt-4">Education</h2>
            {education.map((edu, index) => (
                <EducationCard
                    key={index}
                    collegeName={edu.collegeName}
                    startDate={edu.startDate}
                    endDate={edu.endDate}
                    major={edu.major}
                    gpa={edu.gpa}
                    honors={edu.honors}
                    activities={edu.activities}
                />
            ))}
        </div>
    );
}
export default Education;