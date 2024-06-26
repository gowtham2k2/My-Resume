
// hover and copy clipboard event

var contactElements = document.querySelectorAll("#intro .contacts>*");

contactElements.forEach((element) => {
  $(element)
    .on("mouseover", () => {
      $(element).addClass("contactHover");
    })
    .on("mouseout", () => {
      $(element).removeClass("contactHover");
    })
    .on("click", () => {
      if ($(element)[0].nodeName != "A") {
        navigator.clipboard.writeText(element.firstElementChild.textContent);
        alert("text copied");
      }
    });
});
