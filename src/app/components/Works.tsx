/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utls/motion";
import { styles } from "../styes/styles";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }: any) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>

        <div className='relative w-full h-[230px] cursor-pointer' onClick={() => window.open(source_code_link, "_blank")}>
          <Image
            width={500}
            height={500}
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center'>
              <Image
                width={40}
                height={40}
                src={'/icons/web.png'}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag: any) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="justify-center flex">
      <div className="container">
        <motion.div variants={textVariant(0)}>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("up", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcase my skills and experience through real-world examples of my work.
            Each project is briefly described with links to code repositories and live demos. 
            It reflects my ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7 lg:justify-start justify-center cursor-default'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
