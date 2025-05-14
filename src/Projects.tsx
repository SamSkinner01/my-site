import ProjectCard from "./components/ProjectCard"



const Projects = () => {

    const projects = [
        {
            title: "Object Detection For CS2",
            description: "Identifying which team a player model is for in Counter Strike 2 using YOLO.",
            imageUrl: "https://github.com/SamSkinner01/cs2-od",
        },
        {
            title: "Wage Garnishment",
            description: "A wage garnishment software for CT state marshals.",
            imageUrl: "https://github.com/RigaBee/Wages",
        },
        {
            title: "LendAHand",
            description: "A mobile app for helping volunteers find oppurtunities.",
            imageUrl: "https://github.com/SamSkinner01/LendAHand"
        }
    ]

    return (
        <div className="w-3/4 mx-auto mt-6 mb-6 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-600 mb-4 mt-4">Here are some of my projects</h2>
            <p className="text-gray-500 text-center mb-4">Click on the image to view the project.</p>
            <p className="text-gray-500 text-center mb-4">Some repos are private so you may not be able to view them... but they exist!</p>

            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                />
            ))}
        </div>
    )
}

export default Projects