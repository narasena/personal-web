'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id='contact_me' className='py-12 bg-gray-800/80 px-4 rounded-2xl scroll-mt-20'>
      <motion.h2
        className='text-2xl sm:text-3xl font-bold text-center mb-6 text-white'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        Contact Me
      </motion.h2>
      <div className='flex min-h-full md:gap-x-4 max-md:flex-col items-center justify-center px-4'>
        <div className='md:w-2/3 min-h-[500px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-4 flex items-end justify-start relative'>
          <iframe
            width='100%'
            height='100%'
            className='absolute inset-0'
            title='map'
            src='https://maps.google.com/maps?width=100%&height=800&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed'
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)', border: 0 }}></iframe>
          <div className='bg-gray-700/80 text-white relative flex flex-wrap py-6 rounded shadow-md z-10'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-gray-300 tracking-widest text-xs'>ADDRESS</h2>
              <p className='mt-1'>Purwadhika Technology School, Class Of JCWD-3202</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-300 tracking-widest text-xs'>EMAIL</h2>
              <a className='text-indigo-200 leading-relaxed'>narasena@gmail.com</a>
              <h2 className='title-font font-semibold text-gray-300 tracking-widest text-xs mt-4'>PHONE</h2>
              <p className='leading-relaxed'>+62-878-8571-5065</p>
            </div>
          </div>
        </div>

        <motion.div
          className='max-md:min-w-full w-md flex-1 max-md:mt-4 bg-gray-700 p-6 rounded-lg shadow-md h-max'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-300 mb-2 text-xs sm:text-sm'>Name</label>
              <input
                type='text'
                className='w-full p-2 sm:p-3 rounded bg-gray-600 text-white focus:outline-none text-xs sm:text-sm'
                placeholder='Your Name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-300 mb-2 text-xs sm:text-sm'>Email</label>
              <input
                type='email'
                className='w-full p-2 sm:p-3 rounded bg-gray-600 text-white focus:outline-none text-xs sm:text-sm'
                placeholder='Your Email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-300 mb-2 text-xs sm:text-sm'>Message</label>
              <textarea
                className='w-full p-2 sm:p-3 rounded bg-gray-600 text-white focus:outline-none text-xs sm:text-sm'
                placeholder='Your Message'
                rows={4}></textarea>
            </div>
            <motion.button
              type='submit'
              className='w-full bg-blue-500 p-2 sm:p-3 rounded text-white font-semibold hover:bg-blue-600 transition-colors text-xs sm:text-sm md:mb-3'
              whileHover={{ scale: 1.05 }}>
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
