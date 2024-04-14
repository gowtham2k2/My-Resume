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

var contactElements = document.querySelectorAll("#intro .contacts>*");

contactElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("contactHover");
  });
  element.addEventListener("mouseout", () => {
    element.classList.remove("contactHover");
  });
  if (element.nodeName != "A") {
    element.addEventListener("click", () => {
      navigator.clipboard.writeText(element.firstElementChild.textContent);
      alert("text copied");
    });
  }
});
