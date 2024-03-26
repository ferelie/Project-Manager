import React from "react";

const ProjectsSidebar = ({ onAddProject }) => {
    return (
        <aside className="w-1/3 p-8  bg-stone-900 text-stone-50 md:w72 rounded-r-xl ">
            <h1 className="text-3xl mb-4 font-bold md:text-xl ">
                Your Projects
            </h1>

            <button
                className="
          text-white
          p-2
          rounded
          bg-blue-600
          w-full
          hover:bg-blue-700
          "
          onClick={onAddProject}
            >
                + Add Project
            </button>

            <ul></ul>
        </aside>
    );
};

export default ProjectsSidebar;
