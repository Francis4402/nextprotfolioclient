"use client"

import { motion } from 'framer-motion'
import { slideIn } from '../utls/motion'
import LottiePi from './LottiePi'
import { styles } from '../styes/styles'
import { useState } from 'react'



const Contact = () => {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = () => {
        
    };

    const handleSubmit = () => {
        setLoading(true);
    }

  return (
    <div className="justify-center flex">
        <div className="container justify-center flex">
            <div className="grid lg:flex justify-between gap-10 items-center py-10">

                <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
                    <LottiePi />
                </motion.div>

                <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
                    <div className="max-w-5xl bg-black-100 p-8 rounded-2xl">

                        <p className={styles.sectionSubText}>Get in touch</p>
                        <h3 className={styles.sectionHeadText}>Contact.</h3>

                        <form onSubmit={handleSubmit} className="gap-8 grid mt-12">
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your good name?"
                                    className='w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your web address?"
                                    className='w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Message</span>
                                <textarea
                                    rows={7}
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder='What you want to say?'
                                    className='w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type:"spring", damping: 7, stiffness: 400}}
                                            type='submit'
                                            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                            >
                                {loading ? "Sending..." : "Send"}
                            </motion.button>
                        </form>

                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Contact