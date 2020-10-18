import React from 'react';
import Bar from './Bar';
import JavaScript from '../components/icons/java-script.svg';
import computer from '../components/icons/computer.svg'
import { motion } from 'framer-motion'


const languages = [
    {
        icon:JavaScript,
        name:'JavaScript',
        level:'76'
    },
    {
        icon:computer,
        name:'React',
        level:'60'
    },
    {
        icon:computer,
        name:'HTML/CSS',
        level:'80'
    }
]

const tools = [
    {
        icon:JavaScript,
        name:'Illustrator/Photoshop',
        level:'89'
    },
    {
        icon:computer,
        name:'Adobe/Office Package',
        level:'90'
    },
    {
        icon:computer,
        name:'Github/GitBash/VSC',
        level:'86'
    }

]

const Resume = () => {
    const resume_variant = {
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
        <motion.div className="container resume"
        variants={resume_variant}
        initial='hidden'
        animate='visible'
        exit='exit'>
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Political Sciences
                        </h5>
                        <p className="resume-card__name">
                            Babes-Bolyai University
                        </p>
                        <p className="resume-carc__details">The best University in Romania</p>
                    </div>
                </div>

                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Lorem ipsuiubbu
                        </h5>
                        <p className="resume-card__name">
                            Boyebeub
                        </p>
                        <p className="resume-carc__details">The best University in Romania</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                                languages.map(language=>
                                <Bar value={language}/>
                                )
                        }
                    </div>
                </div>

                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                                tools.map(tool=>
                                <Bar value={tool}/>
                                )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;