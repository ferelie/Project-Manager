import React from "react";

const ProjectsSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w72 rounded-r-xl ">
      <h2>Your Projects</h2>
      <>
        <button
          className="
          border-blue-700
          border
          text-white
          px-4
          py-2
          rounded-md
          hover:bg-blue-700
          "
        >
          + Add Project
        </button>
      </>
      <ul></ul>
    </aside>
  );
};

export default ProjectsSidebar;
