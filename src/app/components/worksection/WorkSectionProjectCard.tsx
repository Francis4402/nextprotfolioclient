/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"


import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";



const WorkSectionProjectCard = ({project, index}: {project: any, index: any}) => {

    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const router = useRouter();

    const handleProjectDetials = () => {
        router.push(`/project/${project._id}`);
    }

    useEffect(() => {
      cardsRef.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, []);
    
  return (
    <div ref={el => {cardsRef.current[index] = el}}>
      <Tilt className='bg-tertiary p-5 shadow-lg shadow-blue-950 rounded-2xl sm:w-[360px] w-full'>

        <div className='relative w-full h-[230px] cursor-pointer' onClick={handleProjectDetials}>
          <Image
            width={500}
            height={500}
            src={project.projectImages}
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
          <h3 className='text-white font-bold text-[24px]'>{project.title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags}
        </div>
      </Tilt>
    </div>
  )
}

export default WorkSectionProjectCard