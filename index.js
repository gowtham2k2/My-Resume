var mainHtml = document.getElementsByTagName("html")[0];

if (mainHtml.clientWidth < 680) {
  let details = document.querySelectorAll("#details .details-grid>*");

  details.forEach((element) => {
    if (element.classList.contains("interest")) {
      element.style.cssText = "order:-2";
    }
    if (element.classList.contains("keySkills")) {
      element.style.cssText = "order:-1";
    }
  });
}

var footerElements = document.querySelectorAll("footer>*");

footerElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("footerHover");
  });
  element.addEventListener("mouseout", () => {
    element.classList.remove("footerHover");
  });
  if (!element.classList.contains("github")) {
    element.addEventListener("click", () => {
      navigator.clipboard.writeText(element.lastElementChild.textContent);
      alert("text copied");
    });
  }
});
