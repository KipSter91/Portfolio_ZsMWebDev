// Typed content and dynamic feature initialization
const typedContent = {
  en: [
    "Warehouse Manager",
    "Full-stack Webdeveloper",
    "Husband (of Barbara Márku)",
    "Traveller",
    "Video Game Fanatic... :)",
  ],
  hu: [
    "Raktárigazgató",
    "Full-stack webfejlesztő",
    "Férj (Márku Barbarának)",
    "Világutazó",
    "Videojáték fanatikus... :)",
  ],
  nl: [
    "Warehouse Manager",
    "Full-stack Webontwikkelaar",
    "Echtgenoot (van Barbara Márku)",
    "Wereldreiziger",
    "Videospel fanatiek... :)",
  ],
};

// Initialize the typed feature
export function initTyped(lang) {
  const targetElement = document.querySelector("#typed-effect"); // Target your typed effect element
  if (!targetElement) {
    console.error("Typed effect target element not found!");
    return;
  }

  new Typed("#typed-effect", {
    strings: typedContent[lang],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });
}