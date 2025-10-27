'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { assets } from '@/assets/assets'
import { infoList, toolsData } from '@/assets/assets'


const About = () => {
    const displayInfoList = () => {
        return infoList.map(({icon, iconDark, title, description}, k) => 
        (<motion.li
        whileHover={{scale: 1.05}}
        key={k} className='border-[0.5px] border-gray-400
        rounded-xl p-6 hover:bg-[#FFA07A]/25
        hover:-translate-y-1 duration-500 hover:shadow-[0_3px_0_rgb(249,70,37)] hover:border-[#FFA07A]'>
            <Image src={icon} alt={title}/>
            <h3 className='my-4 font-semibold
            text-gray-700'>{title}</h3>
            <p className='text-gray-600 text-sm'>{description}</p>
        </motion.li>))
    }

    const displayTools = () => {
        return toolsData.map((tool, index) => 
        (<motion.li
        whileInView={{scale: 1.1}}
        key={index} className='flex items-center justify-center 
        w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg 
        cursor-pointer hover:-translate-y-1 duration-500'>
            <Image src={tool} alt='' className='w-5 sm:w-7' />
        </motion.li>))
    }
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg'>Introduction</motion.h4>
        <motion.h2
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl'>About me</motion.h2>
        
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.8}}
            className='flex-1'>
                <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.8, duration: 0.6}}
                className='text-center mx-auto max-w-4xl mt-3'
                >I am a Frontend Developer based in Morocco, always learning and improving with every challenge I take on.</motion.p>

                <motion.ul
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className='grid grid-cols-1 sm:grid-cols-5 gap-6 
                mx-auto mt-3'>
                    {displayInfoList()}
                </motion.ul>
                
                <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                className='flex flex-col justify-center items-center'>
                    <motion.h4
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 1.3}}
                    className='my-6 text-gray-700 font-bold'>Tools I use</motion.h4>

                    <motion.ul
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 1.5}}
                    className='flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-2xl'>
                        {displayTools()}
                    </motion.ul>
                </motion.div>
            </motion.div>  
    </motion.div>
  )
}

export default About
