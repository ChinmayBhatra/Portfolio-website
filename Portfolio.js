// script.js

// Get the button and the list container
const showProjectsBtn = document.getElementById('showProjectsBtn');
const projectsListContent = document.getElementById('projects-list-content');

// Array of projects
const projects = [
    { name: 'Portfolio Website', description: 'A personal portfolio website showcasing my work.' },
    { name: 'E-commerce Site', description: 'An online store with payment gateway integration.' },
    { name: 'Weather App', description: 'A web app that shows weather information based on location.' }
];

// Event listener for the button
showProjectsBtn.addEventListener('click', function() {
    // Clear the current list if it exists
    projectsListContent.innerHTML = '';

    // Create a list of projects dynamically
    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectsListContent.appendChild(li);
    });
});
