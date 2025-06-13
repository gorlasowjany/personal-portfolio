import React from "react";
import {motion} from "framer-motion";
const AboutMe = () =>{
    return(
        <motion.section initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} className="w-full px-6 py-12 bg-white dark:bg-gray-900" >
            <section className="w-full px-6 py-12 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src="/assets/profile.jpg" 
          alt="Your profile" 
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-lg"
        />
        <h1 className="mt-6 text-4xl font-bold text-gray-800 dark:text-white">
          Hi, I'm Sowjanya 👋
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A passionate full-stack developer building interactive and modern web experiences.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">HTML</span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">CSS</span>
          <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
        </div>
      </div>
   
     </section>


        </motion.section>
     
    )
}
export default AboutMe