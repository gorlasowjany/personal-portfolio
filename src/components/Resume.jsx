import React from "react";
const Resume = () => {
    return (
     <section className="w-full py-12 px-6 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Resume</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Want to know more about my skills and experience? Download my resume below</p>
        <div className="mt-6"><a href="/assets/resume.pdf" download className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">Download Resume</a></div>
     </section>
    )
}
export default Resume