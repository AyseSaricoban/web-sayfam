// import React from "react";
// import Title from "./Title";

// function Profile() {
//   return (
//     <div>
//       <div className="w-full md:w-6/12  mt-5 font-semibold flex  ">
//         <Title>Profile</Title>
//       </div>
//       <div className="flex">
//         <h2 className="text-2xl font-bold mb-4  w-1/4">Profile</h2>
//         <h2 className="text-2xl font-bold mb-4 w-1/2">About Me</h2>
//       </div>
//       <div className="flex">
//         <div className="w-1/4 bg-blue-200 p-4">
//           <ul className="list-disc pl-4">
//             <li>a</li>
//             <li>b</li>
//             <li>c</li>
//             <li>d</li>
//           </ul>
//         </div>

//         <div className="w-1/4 bg-green-200 p-4">
//           <ul className="list-decimal pl-4">
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//             <li>4</li>
//           </ul>
//         </div>

//         <div className="w-1/2 bg-yellow-200 p-4">
//           <p>deagjnajekngka</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React from "react";
import Title from "./Title";

function Profile() {
  return (
    <div>
      <div className="bg-indigo-300 w-full  h-1 mt-12"></div>

      <div className="w-full md:w-6/12 mt-9 font-semibold py-5 flex">
        <Title>Profile</Title>
      </div>

      <div className="flex">
        <h2 className="text-2xl font-bold mb-4 w-1/4  text-gray-600">
          Profile
        </h2>

        <h2 className="text-2xl font-bold mb-4 w-1/2 ml-auto text-gray-600">
          About Me
        </h2>
      </div>

      <div className="flex">
        <div className="w-1/4">
          <ul className="list-disc  text-gray-600 dark:text-gray-300 pl-4 text-xl ">
            <li className="mb-3">Birt of Date</li>
            <li className="mb-3">City</li>
            <li className="mb-3">Education</li>
            <li className="mb-3">Preferred Role</li>
          </ul>
        </div>

        <div className="w-1/4">
          <ul className=" pl-4 text-xl  text-gray-600 dark:text-gray-300">
            <li className="mb-3">22.01.1998</li>
            <li className="mb-3">Ankara</li>
            <li className="mb-3">AU Architecture</li>
            <li className="mb-3">Frontend, UI</li>
          </ul>
        </div>

        <div className="w-1/2  text-gray-600 dark:text-gray-300">
          <p>
            Hello, I'm Ayşe. After completing my degree in architecture and
            practicing in the field for a year, I developed an interest in the
            world of software. I pursued full stack developer training to delve
            into the realm of software development. My background in
            architecture has enriched my approach to merging design principles
            with technology. I'm always open to questions or collaboration
            proposals.
          </p>
        </div>
      </div>
      <div className="bg-indigo-300 w-full h-1 mt-7 mt-2"></div>
    </div>
  );
}

export default Profile;
