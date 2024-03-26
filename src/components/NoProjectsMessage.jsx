import noImage from "../assets/no-projects.png";

const NoProjectsMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <img
                src={noImage}
                alt="No Projects"
                className="w-32 h-32 mb-4"
            />
            <p className="text-gray-700 text-lg text-center">
                No projects added, click{" "}
                <span className="text-blue-500">"Add Project"</span> to start.
            </p>
        </div>
    );
};

export default NoProjectsMessage;
