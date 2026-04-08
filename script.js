function openProject(projectId) {
  const overlay = document.getElementById("projectOverlay");

  // Hide all project panels
  document.querySelectorAll(".project-detail-panel").forEach(p => {
    p.style.display = "none";
  });

  // Show selected project
  if (projectId === "budgetEase") {
    document.querySelector(".project-detail-panel").style.display = "block";
  }

  if (projectId === "styleMate") {
    document.getElementById("styleMateProject").style.display = "block";
  }

  overlay.classList.add("active");
}

function closeProject() {
  const overlay = document.getElementById("projectOverlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

function openImage(src) {
  const overlay = document.getElementById("imageOverlay");
  const image = document.getElementById("overlayImage");
  image.src = src;
  overlay.classList.add("active");
}

function closeImage() {
  document.getElementById("imageOverlay").classList.remove("active");
}

function showTab(tabId, buttonElement) {
  const tabs = document.querySelectorAll(".nav-tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));

  buttonElement.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProject();
  }
});
