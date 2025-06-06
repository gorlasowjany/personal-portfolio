import React from "react";
const projects = [
    {
      title: "Weather App",
      description: "A React app that fetches live weather data using OpenWeatherMap API.",
      image: "/assets/weather.png",
      github: "https://github.com/gorlasowjany/weather-app",
      live: "https://yourweatherapp.vercel.app",
    },
    {
      title: "ToDo App",
      description: "A clean, responsive to-do list app with filtering and localStorage support.",
      image: "/assets/todo.png",
      github: "https://github.com/yourusername/todo-app",
      live: "https://yourtodoapp.vercel.app",
    },
  ]
const Projects = () => {
    return (
        <section className="w-full px-6 py-12 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project,idx) =>(
                        <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                          <img src={project.image} alt={project.title} className="rounded mb-4" />
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                          <p className="mt-2 text-gray-600 dark:text-gray-300" >{project.description}</p>
                          <div className="mt-4 flex gap-4">
                            <a href={project.github} className="text-blue-600 hover:underline" >Github</a>
                            <a href={project.live} className="text-green-600 hover:underline">Live Demo</a>

                          </div>
                        </div>
                    ))}
                    <div>

                    </div>
                </div>
            </div>

        </section>

    )
}
export default Projects