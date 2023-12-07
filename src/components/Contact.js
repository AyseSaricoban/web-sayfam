import React from "react";

function Contact() {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-4">
      <p className="font-semibold text-4xl text-gray-900 dark:text-gray-200">
        Let's work together on
      </p>
      <p className="font-semibold text-4xl text-gray-900 dark:text-gray-200 mt-2">
        your next project.
      </p>
      <div class="flex items-center justify-between">
        <div>
          <a
            href="mailto:aysesrcbnn@gmail.com"
            class="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:text-indigo-500"
          >
            👉🏻 aysesrcbnn@gmail.com
          </a>
        </div>
        <div class="flex space-x-4">
          <p class="text-gray-500 hover:text-gray-200 underline cursor-pointer">
            Personal blog
          </p>
          <p class="text-green-500 hover:text-gray-200 underline cursor-pointer">
            Github
          </p>
          <p class="text-blue-500 hover:text-gray-200 underline cursor-pointer">
            Linkedin
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
