import React from "react";
import Title from "./Title";
import ProjectsItem from "./ProjectsItem";
import ProjectsData from "../data/ProjectsData";
function Projects() {
  return (
    <>
      <div className="py-8">
        <Title>Projects</Title>
      </div>

      <div className="flex space-x-12">
        {ProjectsData.map((e, id) => (
          <ProjectsItem
            key={id}
            imgUrl={e.imgUrl}
            title={e.title}
            tech={e.tech}
            descriptions={e.descriptions}
          ></ProjectsItem>
        ))}
      </div>
    </>
  );
}

export default Projects;
