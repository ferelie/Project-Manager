import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectsMessage from "./components/NoProjectsMessage";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
    const [projectState, setProjectState] = useState({
        projectStateId: "new",
        projects: [],
    });

    function handleOnAddProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                projectStateId: "new",
            };
        });
    }

    function handleOnCancel() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                projectStateId: "empty",
            };
        });
    }
    
    function handleOnSave(projectData) {
        setProjectState((prevState) => {
            return {
                ...prevState,
                projects: [...prevState.projects, projectData],
                // change projectStateId to something other than empty to show existing projects
            };
        });
    }

    console.log(projectState);

    return (
        <main className="h-screen bg-stone-300 pt-4 flex gap-4">
            <ProjectsSidebar onAddProject={handleOnAddProject} />
            {projectState.projectStateId === "new" && (
                <NewProject onCancel={handleOnCancel} onSave={handleOnSave} />
            )}
            {projectState.projectStateId === "empty" && <NoProjectsMessage />}
        </main>
    );
}

export default App;
