window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector("#transform-world .overlay");
  const section = document.querySelector("#transform-world");

  window.addEventListener("scroll", () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visible = 1 - Math.max(0, rect.top) / windowHeight;

    if (visible > 0 && visible < 1.2) {
      overlay.style.opacity = visible;
    } else {
      overlay.style.opacity = 0;
    }
  });
});
