const btnToggle = document.getElementById("btn-toggle");
const list = document.getElementById("header-list");
const listIcon = document.getElementById("icons");
const children = [...list.children];
const buttons = document.getElementsByClassName("days");
const btnContent = [...document.getElementsByClassName("tab-pane")];
const header = document.getElementsByClassName("header")[0];

const sections = document.querySelectorAll("section");

const numOne = document.getElementsByClassName("num-1")[0];
const numTwo = document.getElementsByClassName("num-2")[0];
let randomNum1 = Math.floor(Math.random() * 20) + 1;
let randomNum2 = Math.floor(Math.random() * 20) + 1;
let total = randomNum1 + randomNum2;
const result = document.getElementById("result");
const submit = document.querySelector("input[type=submit]");
submit.disabled = true;
console.log(submit);

result.addEventListener("input", (event) => {
  let answer = event.target.value;
  console.log(answer);
  if (total == +answer) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

numOne.textContent = randomNum1 + " ";
numTwo.textContent = randomNum2 + " ";
AOS.init({
  duration: 800,
  easing: "slide",
});

children.forEach((ele) => {
  ele.addEventListener("click", () => {
    list.classList.remove("show");
    listIcon.classList.remove("show");
    btnToggle.ariaExpanded = !JSON.parse(btnToggle.ariaExpanded);
  });
});

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
