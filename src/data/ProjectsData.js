import Photo1 from "../photos/css.jpg";
import Photo2 from "../photos/ınstagram.png";
import Photo3 from "../photos/react.png";

const ProjectsData = [
  {
    imgUrl: Photo1,
    title: "Poster",
    descriptions:
      "In this project, a promotional poster has been created using JavaScript and CSS.",
    tech: ["CSS", "JavaScript"],
  },
  {
    imgUrl: Photo2,
    title: "Instagram",
    descriptions:
      "This project, created using React, is a clone application resembling Instagram. The application includes fundamental Instagram features such as uploading and sharing photos, viewing other users' posts, and liking them. The design aims to reflect the Instagram experience by focusing on a user-friendly interface and visual appeal.",
    tech: ["React"],
  },
  {
    imgUrl: Photo3,
    title: "Task Management",
    descriptions:
      "A task management page has been created using React, incorporating date-fns library for date operations, and tailwindcss for styling. The project is developed with a simple design on a list containing tasks, providing users with information related to dates and task titles.",
    tech: ["React", "Tailwind", "Date-fns"],
  },
];

export default ProjectsData;
