document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.add("initial");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("initial");
    menuIcon.classList.toggle("active");
  });
});
