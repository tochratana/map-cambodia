const navLinks = document.querySelectorAll(".nav-link");

// Get the current URL path
const currentPath = window.location.pathname;
let currentpath;
if (currentPath === "/index.html") {
  currentpath = "." + currentPath;
} else {
  currentpath = ".." + currentPath;
}

// console.log(currentpath);
console.log(currentPath);

// Loop through each link to check if it matches the current path
navLinks.forEach((link) => {
  // Check if the href matches the current path
  console.log(link.getAttribute("href"));
  if (link.getAttribute("href") === currentpath) {
    // Set the style for the active link
    link.classList.add("eachCetegory");
  } else {
    // Reset the style for other links
    link.style.color = "gray";
  }
});
