import React from "react";
import Skills from "../data/Skills";
import SkillsItem from "./SkillsItem";
import SectionTitle from "./Title";

function Services() {
  return (
    <>
      <div className="mt-10">
        <SectionTitle>Skills</SectionTitle>
      </div>
      <div>{/* <Title>Skills</Title> */}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Skills.map((deneme, index) => (
          <SkillsItem
            key={index}
            title={deneme.title}
            icon={deneme.icon}
            description={deneme.description}
          ></SkillsItem>
        ))}
      </div>
    </>
  );
}

export default Services;
