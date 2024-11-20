const btnToggle = document.getElementById("btn-toggle");
const list = document.getElementById("header-list");
const listIcon = document.getElementById("icons");
const children = [...list.children];
const buttons = document.getElementsByClassName("days");
const btnContent = [...document.getElementsByClassName("tab-pane")];
const header = document.getElementsByClassName("header")[0];

const sections = document.querySelectorAll("section");

btnToggle.addEventListener("click", (event) => {
  list.classList.toggle("show");
  listIcon.classList.toggle("show");
  btnToggle.ariaExpanded = !JSON.parse(btnToggle.ariaExpanded);
});

let current = "";
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }

  // Loop through sections to find which one is in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <= sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  // Remove "active" class from all links and add to the current section's link
  children.forEach((link) => {
    link.classList.remove("active");
    if (link.children[0].getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
