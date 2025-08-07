const buttons = document.querySelectorAll(".box-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Toggle active class
    btn.classList.toggle("active");

    // Change arrow direction
    if (btn.classList.contains("active")) {
      btn.textContent = btn.textContent.replace("▼", "▲");
    } else {
      btn.textContent = btn.textContent.replace("▲", "▼");
    }

    // Toggle accordion content
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingTop = 0;
      content.style.paddingBottom = 0;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = "15px";
      content.style.paddingBottom = "15px";
    }
  });
});
