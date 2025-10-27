'use client'
import { useState } from 'react'
import { projectsData, assets } from '@/assets/assets'
import { motion } from 'motion/react'
import { RxCross2 } from "react-icons/rx";

const Projects = () => {
    const [ selectedProject, setSelectedProject ] = useState(null)
    const displayWork = () => {
        return projectsData.map((project, key) => (
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay:0.9, duration: 0.6}}
            key={key} 
            style={{ backgroundImage: `url(${project.bgImage})`}}
            className="h-72 bg-no-repeat bg-cover bg-center rounded-lg border border-gray-600
            relative cursor-pointer group">
                <div className='flex flex-col bg-white/80 backdrop-blur-sm w-10/12 rounded-md absolute bottom-2 
                left-1/2 -translate-x-1/2 py-2 px-2 text-center items-center
                 duration-500 group-hover:bottom-5 min-h-40 justify-between'>
                    <h1 className='font-bold'>{project.title}</h1>
                    <p>{project.description}</p>
                    <button onClick={() => setSelectedProject(project)} className='gap-1 flex items-center text-gray-600
                    justify-center transition-transform duration-300 group-hover:scale-103 group-hover:text-[#FA8072] rounded-lg'>
                        Read more 🠖
                    </button>
                </div>
            </motion.div>
        ))
    }
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20 mb-8'>
        
        <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay:0.3, duration: 0.5}}
        className='text-center mb-2 text-lg'>My Portfolio</motion.h4>
        
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay:0.5, duration: 0.5}}
        className='text-center text-5xl'>My work</motion.h2>
        
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12'
        >Explore a collection of projects crafted during my journey at 1337, highlighting 
        my skills in front-end development, clean design, and creative problem-solving.</motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.9, duration: 0.6}}
        className='grid md:grid-cols-3 gap-8'>
            {displayWork()}
        </motion.div>

        {selectedProject && (
            <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm 
            flex justify-center items-center z-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            >
                <motion.div
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white  w-3xl rounded-xl p-6 shadow-xl relative text-center"
                >
                
                <motion.button
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-500"
                >
                    <RxCross2 />
                </motion.button>

                <motion.h2 
                initial={{y: -5, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.3}}
                className="text-2xl my-4 mb-2">{selectedProject.title}</motion.h2>
                <motion.p 
                initial={{y: -5, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.5}}
                className="text-base mb-3 text-gray-700 leading-8">
                    {selectedProject.description}
                </motion.p>

                
                <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.9}}
                className="text-lg text-gray-600 pt-4 mx-[15%] border-t-4 border-[#F94625]">
                    {selectedProject.techList}
                </motion.p>

                <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 1}}
                className="text-lg mt-4 leading-8">
                    {selectedProject.content}
                </motion.p>

                    <motion.a
                    initial={{y: 0, opacity: 0}}
                    whileInView={{opacity: 1}}
                    whileHover={{y: -2}}
                    transition={{duration: 0.9, delay: 1.2}}
                    href={selectedProject.url}
                    target="_blank"
                    className="inline-block mt-4 px-3 py-2 rounded-lg 
                    text-[#F94625] text-base bg-[#F94625]/15 hover:bg-black hover:text-white"
                    >
                    View on GitHub ↗
                    </motion.a>
                </motion.div>
            </motion.div>
        )}
    </motion.div>
  )
}

export default Projects
