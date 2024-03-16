import React from "react";

const ProjectsSidebar = () => {
  return (
    <aside className="w-1/3 p-8  bg-stone-900 text-stone-50 md:w72 rounded-r-xl ">
      <h2>Your Projects</h2>
      <>
        <button
          className="
          text-white
          p-2
          rounded
          bg-blue-600
          w-full
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
