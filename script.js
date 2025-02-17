var typed = new Typed('#element', {
    strings: ['Coding.', 'Problem Solving.', 'Cloud Engineering.', 'Building Projects.'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});
const projectsContainer = document.querySelector('.projects-container');

projectsContainer.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        // Prevent default vertical scrolling
        event.preventDefault();

        // Scroll horizontally based on the wheel movement
        projectsContainer.scrollLeft += event.deltaY; // Adjust for horizontal scroll
    }
});