// tabs.js
document.addEventListener("DOMContentLoaded", () => {

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Reset all
  function deactivateAll() {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => {
      content.classList.remove("active");
      content.style.display = "none";
      content.style.opacity = 0;
    });
  }

  // Show a specific tab
  function activateTab(tabName) {
    const targetContent = document.getElementById(tabName);
    const targetButton = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);

    if (!targetContent || !targetButton) return; // Safety

    targetButton.classList.add("active");

    targetContent.style.display = "block";

    // Fade-in animation
    let opacity = 0;
    const fade = setInterval(() => {
      opacity += 0.05;
      targetContent.style.opacity = opacity;

      if (opacity >= 1) clearInterval(fade);
    }, 20);

    targetContent.classList.add("active");
  }

  // Initialize first tab
  deactivateAll();
  activateTab(tabButtons[0].dataset.tab);

  // When clicking a tab
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;
      deactivateAll();
      activateTab(tabName);
    });
  });
});
