import React from 'react'
import api from '../../components/icons/api.svg';
import computer from '../../components/icons/computer.svg';
import puzzle from '../../components/icons/puzzle.svg';

const skills = [
    {
        icon:computer,
        title:"Front-End Developer",
        about:["I can create a working website using", <strong key={1}> HTML/CSS/JS/REACT </strong>]
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

export default skills;