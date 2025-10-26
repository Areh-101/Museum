alert("SCRIPT IS LOADED");
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS Loaded");

  const navLinks = document.querySelectorAll("nav a, nav button");

  navLinks.forEach(link => {
    const currentPage = window.location.pathname.split("/").pop();
    const targetPage =
      link.getAttribute("onclick")?.match(/'(.+)'/)?.[1] ||
      link.getAttribute("href")?.split("/").pop() ||
      "";

    if (targetPage === currentPage) {
      link.classList.add("is-active");
    }
  });

  // Tab Switching
  const archBtn = document.querySelector("#tab-arch");
  const anthBtn = document.querySelector("#tab-anth");
  const archSection = document.querySelector("#archeology");
  const anthSection = document.querySelector("#anthropology");

  function showSection(section) {
    if (!archSection || !anthSection) return;

    const isArch = section === "archeology";
    archSection.style.display = isArch ? "block" : "none";
    anthSection.style.display = isArch ? "none" : "block";

    if (archBtn) archBtn.setAttribute("aria-selected", isArch);
    if (anthBtn) anthBtn.setAttribute("aria-selected", !isArch);
  }

  if (archBtn) archBtn.addEventListener("click", () => showSection("archeology"));
  if (anthBtn) anthBtn.addEventListener("click", () => showSection("anthropology"));

  // Expand/Collapse
  const toggleButtons = document.querySelectorAll(".toggle-meta");

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const metaBox = document.getElementById(targetId);
      if (!metaBox) return;

      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !expanded);
      metaBox.classList.toggle("is-hidden");
    });
  });
});