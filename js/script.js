// Toggle icon and navbar function
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

// Toggle the menu icon and navbar visibility
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

// Scroll sections active link using IntersectionObserver
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// IntersectionObserver configuration
const observerOptions = {
  root: null, // Observe the entire viewport
  threshold: 0.7, // Trigger when 60% of the section is visible
};

// Callback function for IntersectionObserver
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const navLink = document.querySelector(`header nav a[href*=${id}]`);

    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active")); // Remove active class from all links
      navLink.classList.add("active"); // Add active class to the currently visible section link
    }
  });
};

// Initialize IntersectionObserver
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section)); // Observe all sections

// Sticky navbar on scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100); // Add sticky class when scrolled past 100px
});

// Remove toggle icon and close navbar when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("active");
  });
});

// Scroll reveal settings
const scrollRevealConfig = {
  reset: false, // Disable reset; animations run only once
  distance: "15px", // Smaller movement for a smoother effect
  duration: 1500, // Faster animation duration
  delay: 150, // Slight delay for animations
};

// Apply ScrollReveal animations
ScrollReveal(scrollRevealConfig).reveal(".home-content, .heading, .footer", {
  origin: "top",
});
ScrollReveal(scrollRevealConfig).reveal(".home-content h1", {
  origin: "left",
});
ScrollReveal(scrollRevealConfig).reveal(
  ".about-content, .about-img, .home-img, .skills-column, .portfolio-container, .contact, .contact h2",
  { origin: "bottom" }
);

// Adjust ScrollReveal configuration for smaller screens
if (window.innerWidth < 768) {
  ScrollReveal({
    ...scrollRevealConfig,
    distance: "10px", // Reduce movement for mobile devices
    duration: 800, // Shorten animation duration
  }).reveal(".home-content, .heading, .footer", { origin: "top" });
}

// Toggle dark/light mode with localStorage
const toggleMode = document.getElementById("checkbox");

// Set initial mode based on localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark"); // Apply dark mode
  toggleMode.checked = true; // Set the toggle to checked
} else {
  document.body.classList.remove("dark"); // Apply light mode
  toggleMode.checked = false; // Set the toggle to unchecked
}

// Toggle and save theme to localStorage
toggleMode.addEventListener("change", () => {
  const isDark = toggleMode.checked; // Get the checkbox state
  document.body.classList.toggle("dark", isDark); // Toggle dark mode class
  localStorage.setItem("theme", isDark ? "dark" : "light"); // Save the theme preference
});
