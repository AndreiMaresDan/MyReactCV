import React from 'react'
import graphicdesigner from '../../components/icons/graphic-designer.svg';
import computer from '../../components/icons/computer.svg';
import puzzle from '../../components/icons/puzzle.svg';
import politics from '../../components/icons/politics.svg';
import pr from '../../components/icons/pr.svg';
import language from '../../components/icons/language.svg';


const skills = [
    {
        icon:computer,
        title:[<strong key={1}>Frontend Developer</strong>],
        about:["I can create a working website using", <strong key={1}> HTML/CSS/JS/REACT </strong>]
    },
    {
        icon:graphicdesigner,
        title:[<strong key={1}>Graphic Designer</strong>],
        about:"I can design posters and edit images for different purposes."
    },
    {
        icon:politics,
        title:[<strong key={1}>Politics Analyst</strong>],
        about:"Wether is about domestic or foreign politics, no problem remains unsolved"
    },
    {
        icon:pr,
        title:[<strong key={1}>PR</strong>],
        about:"I can manage online or offline adds or various events targeting the right public"
    },
    {
        icon:language,
        title:[<strong key={1}>Language Enthusiast</strong>],
        about:"Currently I am fluent in English, but I am learning Arabic and also, I am open to anything new"
    },
    {
        icon:puzzle,
        title:[<strong key={1}>Good working ethic</strong>],
        about:"My entire working activity resides on voluntary work and one NGO leadership"
    }

]

export default skills;