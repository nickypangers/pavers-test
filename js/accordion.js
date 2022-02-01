var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(this.classList);
    if (this.classList.contains("active")) {
      panel.style.maxHeight = "1000px";
      panel.style.marginBottom = "1rem";
    } else {
      panel.style.maxHeight = 0;
      panel.style.marginBottom = 0;
    }
  });
}
