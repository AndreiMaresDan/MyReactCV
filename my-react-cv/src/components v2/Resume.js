import React from 'react';
import Bar from './Bar';
import { motion } from 'framer-motion'
import {tools, languages} from './data/resume_data'

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
                            Security, Intelligence and Competitivity in Organizations (2020-2022)
                        </h5>
                        <h5 className="resume-card__title">
                            Political Sciences (2017-2020)
                        </h5>
                        <p className="resume-card__name">
                            Babes-Bolyai University, Cluj-Napoca
                        </p>
                        <p className="resume-carc__details">One of the highest rated universities in Romania and in the EU, Babes-Bolyai University is 
                     well known for its quality teachers and academic programms.</p>
                    </div>
                </div>

                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intro in IT / Web Development(JS) <br></br>(2019-2020)
                        </h5>
                        <p className="resume-card__name">
                            Scoala informala de IT
                        </p>
                        <p className="resume-carc__details">A very informal and friendly environment where anyone could start learning about programming.</p>
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