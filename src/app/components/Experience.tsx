"use client"

import { StaticImageData } from 'next/image';
import 'react-vertical-timeline-component/style.min.css';
import {motion} from "framer-motion";
import { textVariant } from '../utls/motion';
import { styles } from '../styes/styles';
import { experiences } from '../constants';
import ExperienceCard from './ExperienceCard';
import { VerticalTimeline } from 'react-vertical-timeline-component';


interface Experience {
    title: string;
    icon: StaticImageData;
    iconBg: string;
    points: string[];
}

const Experience = () => {

  return (
    <>
        <motion.div variants={textVariant(0)} className='mt-36'>
            <p className={`${styles.sectionSubText} text-center`}>
                What I have done so far
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>
                Work Experience.
            </h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={`experience-${index}`}
                                    experience={experience}
                    />
                ))}
            </VerticalTimeline>
        </div>
    </>
  )
}

export default Experience