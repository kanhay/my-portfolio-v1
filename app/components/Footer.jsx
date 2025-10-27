import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
            <div className='flex gap-2 items-center justify-center'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                khadijaanhayfou2@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Khadija Anhayfou. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href='https://github.com/kanhay'><Image alt='linkedin' src={assets.github} className='w-6'/></a></li>
                <li><a target='_blank' href='https://www.linkedin.com/in/khadija-anhayfou-09872796/'><Image alt='linkedin' src={assets.linkedin} className='w-6'/></a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
