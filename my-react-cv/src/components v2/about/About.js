import React from 'react';
import { motion } from 'framer-motion'
import skills from './../data/about_data'
import Skillcard from './../Skillcard';
import './about.css'



const About = () => {
    const about_variant = {
        hidden:{
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6, 
            }
        },
        exit:{
            opacity: 0,
            transition:{
                ease:'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"
        variants={about_variant}
        initial='hidden'
        animate='visible'
        exit='exit'>
        <h6 className="about__intro">
        Friendly future front-end developer, 
        interested in geopolitics, foreign languages and cooking, I like to think that life is full of opportunities 
        and it's never too late to learn something new.
        </h6>
            <div className="container about__container">
                <h6 className="about__heading"> What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill=>
                           <Skillcard skill={skill}/>
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;