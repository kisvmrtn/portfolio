function themeSwitch() {
  document.body.classList.toggle("light-theme");
  const contactDark = document.querySelector(".contact_dark");
  const contactLight = document.querySelector(".contact_light");
  const imgDark = document.querySelector(".img_dark");
  const imgLight = document.querySelector(".img_light");

  if (document.body.classList.contains("light-theme")) {
    contactDark.style.display = "none";
    imgDark.style.display = "none";
    contactLight.style.display = "grid";
    imgLight.style.display = "grid";
  } else {
    contactDark.style.display = "grid";
    imgDark.style.display = "grid";
    contactLight.style.display = "none";
    imgLight.style.display = "none";
  }
}

function printPage() {
  window.print();
}
