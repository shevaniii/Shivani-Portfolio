import React from 'react'
const Project = [{
    title: "Password Generator ",
    description:"The Password Generator is a sleek and user-friendly web app built with React and Tailwind CSS that allows users to generate secure passwords of any length. The app provides customization options such as uppercase letters, lowercase letters, numbers, and special characters to enhance security.",
    tech:["react", "tailwind-css"],
    Github:"https://github.com/shevaniii/Password-Generator",
    deploymentLink:"https://secret-password-generator.netlify.app/"
},
{
    title: "Currency Converter",
    description:"The Currency Converter is a simple yet powerful web app built with React and Tailwind CSS, designed to convert currencies in real-time. It allows users to select different currencies and instantly see the converted amount based on the latest exchange rates.",
    tech:["react", "tailwind-css"],
    Github:"https://github.com/shevaniii/CurrencyConverter",
    deploymentLink:"https://currency-converter-reacttttt.netlify.app/" 
},
{
    title: "Weather Website",
    description:"I have created this weather app having first registration page then login window and then you can access weather condition of any city by using WAETHER API also my basics skills of HTML , CSS , JAVASCRIPT . you can access my website by just click on the link given below.",
    tech:["HTML", "CSS", "Javascript"],
    Github:"https://github.com/shevaniii/weatherapp",
    deploymentLink:"https://sage-kheer-6d770c.netlify.app/" 
},{
  title: "To-Do app",
    description:"I have created this website using my skills of HTML , CSS ,Javascript.ToDo List App This simple ToDo list app allows users to manage their tasks efficiently. Users can add, remove, and mark tasks as complete. The app provides a clean interface for seamless task management.",
    tech:["HTML", "CSS", "Javascript"],
    Github:"https://github.com/shevaniii/TO-DO-app",
    deploymentLink:"https://cosmic-genie-b4ab8f.netlify.app/" 
}];
const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">My Projects</h1>

      <div className="grid gap-6 max-w-4xl w-full">
        {Project.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-purple-500">{project.title}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-gray-400 mt-2">
              <span className="font-semibold">Tech Stack:</span> {project.tech.join(", ")}
            </p>
            <a
              href={project.Github}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 mr-2 bg-blue-600 py-2 px-4 rounded-lg hover:bg-purple-600 transition"
            >
              View on GitHub
            </a>
            <a
              href={project.deploymentLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 mr-2 bg-blue-600 py-2 px-4 rounded-lg hover:bg-purple-600 transition"
            >
              Deployment Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;