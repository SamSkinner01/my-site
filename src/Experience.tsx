import ExperienceCard from "./components/ExperienceCard";

function Experience() {
    const experience = [
        {
            companyName: "Clear Guide Medical",
            startDate: "October 2023",
            endDate: "Present",
            position: "Intern & Software Engineer",
            description: [
                "Engineer core logic and visualizations for a multicore data preprocessing pipeline written in Python that automates mask generation from manual image/video labels and streamlines offline cropping, reducing processing time by 83% compared to the previous system.",
                "Conduct large scale, diverse data collection and perform meticulous annotation to ensure robust AI training.",
                "Integrate TensorRT with C++ to accelerate model runtime by 2-3x, significantly enhancing system performance under constrained physical conditions, such as limited power.",
                "Trained a variety of AI models that have been successfully deployed in a 12 patient clinical trial, validating real world performance.",
                "Collaborate with clinicians through trial observations and direct feedback sessions to align product development with clinical needs, and communicate technical challenges and new requirements to the engineering team."
            ],
            technologies: ["Python", "TensorRT", "C++"]
        },
        {
            companyName: "Manhattan College",
            startDate: "May 2022",
            endDate: "October 2022",
            position: "Research Assistant",
            description: [
                "Developed and implemented a Reinforcement Learning agent utilizing the Deep Q Network algorithm, PyTorch, and OpenAI Gym frameworks to play Atari Pong, showcasing AI and machine learning expertise.",
                "Conducted in depth analysis to evaluate the effect of varying environmental factors, such as the size of the paddles, on learning process and agent performance, ensuring robustness and adaptability in different scenarios.",
                "Maintained constant hyperparameters, such as batch size, learning rate, and the epsilon start, decay, and minimum values, throughout the experimentation phase, enabling accurate comparisons and reliable conclusions.",
                "Observed consistent out performance when trained in a wider variety of environments over a singular environment, and presented these findings to the School of Science, initiating knowledge sharing within the academic community."
            ],
            technologies: ["Python", "PyTorch", "OpenAI Gym"]
        }
    ];

    return (
        <div className="w-3/4 mx-auto mt-6 mb-6 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-600 mb-4 mt-4">Experience</h2>
            {experience.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    companyName={exp.companyName}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    position={exp.position}
                    description={exp.description}
                    technologies={exp.technologies}
                />
            ))}
        </div>
    );
}
export default Experience;