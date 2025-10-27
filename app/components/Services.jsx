'use client'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Services = () => {
    const displayServices = () => {
        return (serviceData.map(({icon, title, description, link}, k) => ( 
            <motion.div 
            whileHover={{scale: 1.05}}
            key={k} className='border border-gray-400 rounded-lg px-8 
            py-12 hover:shadow-black cursor-pointer hover:bg-[#fcf4ff]
            hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_rgba(0,0,0)]'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>
                    {description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image alt='title' src={assets.right_arrow} className='w-4' />
                </a>
            </motion.div>
        )))
    }
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg'>What I offer</motion.h4>
        <motion.h2
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl'>My Services</motion.h2>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12'
        >I am an experienced Frontend Developer with over a decade 
        of professional expertise in the field. Throughout my
        career, I have had the privilege of collaborating with
        prestigious organizations, contributing to their success 
        and growth</motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-6 my-10'>
            {displayServices()}
        </motion.div>
    </motion.div>
  )
}

export default Services
