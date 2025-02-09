import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import { opacity, slideUp } from './anim';
import styles from './style.module.scss';



const words = ["Hello", "Welcome", "To", "My", "Portfolio"]

const Preloader = () => {

    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height: 0});

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, []);

    useEffect(() => {
        if(index === words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1)
        }, index === 0 ? 1000 : 150)
    }, [index]);

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
        {
          dimension.width > 0 &&
          <>
            <motion.p variants={opacity} initial="initial" animate="enter">
              {words[index]}
            </motion.p>
            <svg>
              <motion.path variants={opacity} initial="initial" exit="exit"></motion.path>
            </svg>
          </>
        }
    </motion.div>
  )
}

export default Preloader