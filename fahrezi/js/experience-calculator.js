function calculateYearsOfExperience() {
    const startDate = new Date(2014, 8); // September 2014 (months are 0-based)
    const currentDate = new Date();
    const yearsDiff = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(yearsDiff);
}

// Update the data-number attribute when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const experienceElement = document.querySelector('.number[data-number]');
    if (experienceElement) {
        const years = calculateYearsOfExperience();
        experienceElement.setAttribute('data-number', years);
    }
}); 