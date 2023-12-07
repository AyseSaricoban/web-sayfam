import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-end space-x-8 ">
        <div className="mt-2">Skills</div>
        <div className="mt-2">Projects</div>
        <a
          href="mailto:aysesrcbnn@gmail.com"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 md:text-md"
        >
          {" "}
          Hire Me
        </a>
      </div>
    </>
  );
}

export default Header;
