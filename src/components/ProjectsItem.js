import React from "react";

function ProjectsItem({ imgUrl, title, tech, descriptions }) {
  return (
    <div className="w-1/3 mb-8">
      <img
        src={imgUrl}
        alt={title}
        className="h-36 md:h-48 object-cover mb-4 w-full"
      />
      <div className="text-gray-600 dark:text-gray-300 mb-3">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="text-xs md:text-sm mb-5 space-x-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-200 inline-block dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        <p className="text-gray-800 dark:text-gray-300">{descriptions}</p>
      </div>
    </div>
  );
}

export default ProjectsItem;
