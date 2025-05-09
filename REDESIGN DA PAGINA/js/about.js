document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".qualification-button");
  const contents = document.querySelectorAll(".qualification-content");

  document.querySelector("#education").classList.add("qualification-active");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      tabs.forEach((t) => t.classList.remove("button-active"));

      tab.classList.add("button-active");

      contents.forEach((content) => {
        content.classList.remove("qualification-active");
      });

      document.querySelector(targetId).classList.add("qualification-active");

      console.log("Tab clicked:", targetId);
    });
  });

  const animateSkills = () => {
    const skillItems = document.querySelectorAll(".skill-item");

    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 100 * (index + 1));
    });
  };

  document.querySelectorAll(".skill-item").forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const skillsSection = document.querySelector(".skills-section");
  if (skillsSection) {
    observer.observe(skillsSection);
  }

  console.log("About.js loaded successfully");
});
