
import imdb from '../../components/projects_images/imdb.png';
import hangman from '../../components/projects_images/hangman.png';
import rockpaperscissors from '../../components/projects_images/rockpaperscissors.png';
import recursive from '../../components/projects_images/recursive.png';
import mealsmenu from '../../components/projects_images/mealsmenu.png';
import pagination from '../../components/projects_images/pagination.png';
import carousel from '../../components/projects_images/carousel.png';



const data_projects = [
    {
        name: 'Rock, Paper, Scissors',
        image: rockpaperscissors,
        github_url: 'https://github.com/StefanRadusi/scit_grupa-15/tree/mares-andrei-function-and-scope-homework',
        category: ['functions']
    },

    {
        name: 'Meals Menu',
        image: mealsmenu,
        github_url: 'https://github.com/StefanRadusi/scit_grupa-15/tree/andrei-mares-async-programming-homework',
        category: ['async']
    },

    {
        name: 'Hangman',
        image: hangman,
        github_url: 'https://github.com/StefanRadusi/scit_grupa-15/tree/andrei-mares-hangman-homework',
        category: ['functions']
    },

    {
        name: 'Images Carousel',
        image: carousel,
        github_url: 'https://github.com/StefanRadusi/scit_grupa-15/tree/andrei-mares-images-carousel-homework',
        category: ['vanilla']
    },

    {
        name: 'Pagination',
        image: pagination,
	    github_url: 'https://github.com/StefanRadusi/scit_grupa-15/tree/andrei-mares-pagination-homework',
        category: ['functions', 'BOM', 'vanilla']
    },

    {
        name: 'Recursive',
        image: recursive,
	    github_url: 'https://github.com/StefanRadusi/scit_grupa-15/tree/andrei-mares-recursive-homework-start',
        category: ['functions']
    },

    {
        name: 'Movie 101',
        image: imdb,
	    github_url: 'https://github.com/penceajr/movies101',
        category: ['react.js', 'functions', 'async']
    }
]

export default data_projects;