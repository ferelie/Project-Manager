import React, { useRef } from "react";

const NewProject = ({ onCancel, onSave }) => {
    const title = useRef();
    const description = useRef();
    const date = useRef();

    function onSaveClick() {
        onSave({
            title: title.current.value,
            description: description.current.value,
            date: date.current.value,
        });
    }

    return (
        <div className="flex flex-col gap-3 mt-16">
            <menu className="flex justify-between">
                <button
                    onClick={onSaveClick}
                    className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 "
                >
                    Save
                </button>
                <button
                    onClick={onCancel}
                    className="bg-red-600 text-white rounded-lg p-2 hover:bg-red-700 "
                >
                    Cancel
                </button>
            </menu>
            <p className=" flex flex-col">
                <label className="text-md font-bold" htmlFor="title">
                    Title
                </label>
                <input ref={title} type="text" />
            </p>
            <p className=" flex flex-col">
                <label className="text-md font-bold" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="border border-stone-300 rounded-lg p-2 focus:bg-stone-200"
                    rows={3}
                    ref={description}
                />
            </p>
            <p className=" flex flex-col ">
                <label className="text-md font-bold" htmlFor="date">
                    Date
                </label>
                <input ref={date} type="text" />
            </p>
        </div>
    );
};

export default NewProject;
