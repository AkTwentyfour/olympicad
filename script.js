document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    const components = document.querySelectorAll(".animate");

    components.forEach((component) => {
      const component_position = component.getBoundingClientRect().top;
      const window_height = window.innerHeight;

      if (component_position < window_height * 0.9) {
        component.classList.add("animate-active");
      }
    });
  });

  var components = document.querySelectorAll(".animate-load");

  components.forEach((component) => {
    component.classList.add("animate-load-active");
  });

  const collapse_btn = document.querySelector(".collapse-btn");
  collapse_btn.addEventListener("click", () => {
    const collapse = document.querySelector(".collapse");

    collapse.classList.toggle("show");
  });
});
