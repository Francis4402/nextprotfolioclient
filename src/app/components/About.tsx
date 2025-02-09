"use client"

import gsap from "gsap"
import { useEffect } from "react"
import { styles } from "../styes/styles";

const About = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.service-card`,
                start: 'top 80%',
            },
        });

        const textl = gsap.timeline({
            scrollTrigger: {
                trigger: '.texts',
                start: 0,
            },
        });

        tl.fromTo(
            `.service-card`,
            {
                opacity: 0,
                x: -100 ,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
            }
        );

        textl.fromTo(
            ".texts",
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
            }
        );
    }, []);

  return (
    <div className="lg:mt-72 md:mt-[220px] mt-32">
        <div className="texts">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>

        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] texts'>
            I&#39;m a skilled Full Stack Web Developer and expertise in frameworks like Laravel, MySql, React, Node.js, Express, Next.js and MongoDB. I&#39;m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let&#39;s work together to bring your ideas to life!
        </p>

        <div className="mt-20 flex flex-wrap gap-10 md:justify-center">

        </div>
    </div>
  )
}

export default About