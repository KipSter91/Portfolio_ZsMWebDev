// Import the translations object (make sure translations.js is a module!) and the typedContent object and function for the typed feature.
import { translations } from './translations.js';
import { initTyped } from './typedContent.js';

// Select all language buttons
const langButtons = document.querySelectorAll('.lang');

// Function to update the content based on the selected language
function updateContent(lang) {
    const translation = translations[lang];

    // Check if the selected language exists in the translations object
    if (!translation) {
        console.error(`Translations for language "${lang}" not found!`);
        return;
    }

    // Update the page title dynamically
    document.getElementById('site-title').textContent = translation.siteTitle;

    // Update the navigation bar elements
    document.getElementById('nav-logo').innerHTML = translation.nav.logo;
    document.getElementById('nav-home').textContent = translation.nav.home;
    document.getElementById('nav-about').textContent = translation.nav.about;
    document.getElementById('nav-skills').textContent = translation.nav.skills;
    document.getElementById('nav-projects').textContent = translation.nav.projects;
    document.getElementById('nav-contact').textContent = translation.nav.contact;

    // Update the home section content
    document.getElementById('home-name').textContent = translation.home.name;
    document.getElementById('home-hello').textContent = translation.home.hello;
    document.getElementById('home-tagline').innerHTML = translation.home.tagline;
    document.getElementById('home-description').innerHTML = translation.home.description;

    // Update the about section content
    document.getElementById('about-title').innerHTML = translation.about.title;
    document.getElementById('about-subtitle').textContent = translation.about.subtitle;
    document.getElementById('about-description').innerHTML = translation.about.description;

    // Update the skills section title
    document.getElementById('skills-title').innerHTML = translation.skills.title;
    document.getElementById('skills-column-title-1').textContent = translation.skills.subtitle1;
    document.getElementById('skills-column-title-2').textContent = translation.skills.subtitle2;

    /**
  * Dynamically updates the skills section
  * @param {HTMLElement} container - The container element to update
  * @param {Array} skillsData - The array of skills data (each item contains skill, percentage, and optional icon)
  */
    function updateSkillsSection(container, skillsData) {
        // Clear existing content in the container
        container.innerHTML = "";

        // Dynamically generate new elements
        skillsData.forEach((data) => {
            // Create a progress container
            const progressDiv = document.createElement("div");
            progressDiv.classList.add("progress");

            // Create the H3 element for skill name and percentage
            const h3Element = document.createElement("h3");

            // Add icon if available
            if (data.icon) {
                const iconElement = document.createElement("i");
                iconElement.className = data.icon; // Dynamic icon class
                h3Element.appendChild(iconElement);
            }

            // Add skill name and percentage
            h3Element.innerHTML += ` ${data.skill} <span>${data.percentage}</span>`;

            // Create the progress bar container
            const barDiv = document.createElement("div");
            barDiv.classList.add("bar");

            // Set the progress bar width
            const barSpan = document.createElement("span");
            barSpan.style.width = data.percentage; // Set width based on percentage
            barDiv.appendChild(barSpan);

            // Combine all elements
            progressDiv.appendChild(h3Element);
            progressDiv.appendChild(barDiv);

            // Append the progress container to the main container
            container.appendChild(progressDiv);
        });
    }
    // Update skills section 1
    const skillsContainer1 = document.getElementById("skills-container");
    updateSkillsSection(skillsContainer1, translation.skills.skillsData1);

    // Update skills section 2
    const skillsContainer2 = document.getElementById("skills-container-1");
    updateSkillsSection(skillsContainer2, translation.skills.skillsData2);

    // Update the projects section
    document.getElementById('projects-title').innerHTML = translation.portfolio.title;

    // Update the contact section
    document.getElementById('contact-title').innerHTML = translation.contact.title;
    document.getElementById('contact-name-placeholder').placeholder = translation.contact.namePlaceholder;
    document.getElementById('contact-email-placeholder').placeholder = translation.contact.emailPlaceholder;
    document.getElementById('contact-mobile-placeholder').placeholder = translation.contact.mobilePlaceholder;
    document.getElementById('contact-subject-placeholder').placeholder = translation.contact.subjectPlaceholder;
    document.getElementById('contact-message-placeholder').placeholder = translation.contact.messagePlaceholder;
    document.getElementById('contact-submit').textContent = translation.contact.submit;

    // Update the footer with the current year
    const footerYear = new Date().getFullYear();
    document.getElementById('footer-text').textContent = translation.footer.text.replace('%YEAR%', footerYear);
}

// Event listener for language switching
langButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedLang = button.getAttribute('data-lang'); // Get the selected language
        updateContent(selectedLang); // Update content based on language
        localStorage.setItem('preferredLanguage', selectedLang); // Save language preference in localStorage
        initTyped(selectedLang); // Reinitialize the typed feature
    });
});

// Automatically load the preferred language from localStorage or default to English
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
updateContent(preferredLanguage); // Load the initial content
initTyped(preferredLanguage); // Initialize the typed feature
