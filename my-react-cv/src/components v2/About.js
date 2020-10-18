import React from 'react';
import api from '../components/icons/api.svg';
import computer from '../components/icons/computer.svg';
import Skillcard from '../components v2/Skillcard';
import puzzle from '../components/icons/puzzle.svg';
import { motion } from 'framer-motion'

const skills = [
    {
        icon:computer,
        title:"Front-End Developer",
        about:"I can create a working website using HTML/CSS/JS/REACT"
    },
    {
        icon:api,
        title:"Graphic Designer",
        about:"I can design posters and edit images for different purposes."
    },
    {
        icon:api,
        title:"Political Analyst",
        about:"Wether is about domestic or foreign politics, no problem remains unsolved"
    },
    {
        icon:api,
        title:"PR",
        about:"I can manage online or offline adds or various events targeting the right public"
    },
    {
        icon:api,
        title:"Language Enthusiast",
        about:"Currently I am fluent in English, but I am learning Arabic and also, I am open to anything new"
    },
    {
        icon:puzzle,
        title:"Good working ethic",
        about:"My entire working activity resides on voluntary work and one NGO leadership"
    }

]

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