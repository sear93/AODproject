function ibg() {
  document.querySelectorAll(".ibg").forEach(el => {
    if (el.querySelector("img")) {
      el.style.backgroundImage =
        "url(" + el.querySelector("img").getAttribute("src") + ")";
    }
  });
}

ibg();
