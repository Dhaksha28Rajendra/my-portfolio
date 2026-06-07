/* ========================================= */
/* NAVBAR SCROLL EFFECT */
/* ========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(15,23,42,0.92)";

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.25)";

  } else {

    navbar.style.background =
      "rgba(15,23,42,0.7)";

    navbar.style.boxShadow = "none";
  }
});

/* ========================================= */
/* OPEN PROJECT */
/* ========================================= */

function openProject(projectId) {

  const overlay =
    document.getElementById("projectOverlay");

  const allProjects =
    document.querySelectorAll(".project-detail-panel");

  allProjects.forEach(project => {
    project.style.display = "none";
  });

  if (projectId === "budgetEase") {

    document.getElementById(
      "budgetEaseProject"
    ).style.display = "block";
  }

  if (projectId === "styleMate") {

    document.getElementById(
      "styleMateProject"
    ).style.display = "block";
  }

  if (projectId === "studentSphere") {

  document.getElementById(
    "studentSphereProject"
  ).style.display = "block";
}

  overlay.classList.add("active");

  document.body.style.overflow = "hidden";
}

/* ========================================= */
/* CLOSE PROJECT */
/* ========================================= */

function closeProject() {

  const overlay =
    document.getElementById("projectOverlay");

  overlay.classList.remove("active");

  document.body.style.overflow = "auto";
}

/* ========================================= */
/* IMAGE OVERLAY */
/* ========================================= */

/* ========================================= */
/* IMAGE GALLERY */
/* ========================================= */

let currentImageIndex = 0;

let galleryImages = [];

function openImage(img) {

  const overlay =
    document.getElementById("imageOverlay");

  const image =
    document.getElementById("overlayImage");

  const currentGallery =
    img.closest(
      ".gallery-grid, .student-gallery, .certification-grid"
    );

  if(currentGallery){

    galleryImages = Array.from(
      currentGallery.querySelectorAll("img")
    );

    currentImageIndex =
      galleryImages.indexOf(img);

  } else {

    galleryImages = [img];

    currentImageIndex = 0;

  }

  image.src = img.src;

  overlay.classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeImage() {

  document
    .getElementById("imageOverlay")
    .classList.remove("active");

  document.body.style.overflow = "auto";
}

function nextImage() {

  currentImageIndex++;

  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }

  document.getElementById("overlayImage").src =
    galleryImages[currentImageIndex].src;
}

function previousImage() {

  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex =
      galleryImages.length - 1;
  }

  document.getElementById("overlayImage").src =
    galleryImages[currentImageIndex].src;
}


/* ========================================= */
/* VIDEO OVERLAY */
/* ========================================= */

function openVideo(videoSrc) {

  const overlay =
    document.getElementById("videoOverlay");

  const video =
    document.getElementById("overlayVideo");

  video.src = videoSrc;

  overlay.classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeVideo() {

  const overlay =
    document.getElementById("videoOverlay");

  const video =
    document.getElementById("overlayVideo");

  video.pause();

  video.src = "";

  overlay.classList.remove("active");

  document.body.style.overflow = "auto";
}

/* ========================================= */
/* TABS */
/* ========================================= */

function showTab(tabId, buttonElement) {

  const tabs =
    document.querySelectorAll(".nav-tab");

  const contents =
    document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  contents.forEach(content => {
    content.classList.remove("active");
  });

  buttonElement.classList.add("active");

  document
    .getElementById(tabId)
    .classList.add("active");
}



/* ========================================= */
/* ESC KEY SUPPORT */
/* ========================================= */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

  closeProject();

  closeImage();

  closeVideo();
}

  if (event.key === "ArrowRight") {
    nextImage();
  }

  if (event.key === "ArrowLeft") {
    previousImage();
  }
});

/* ========================================= */
/* CLICK OUTSIDE TO CLOSE */
/* ========================================= */

document
  .querySelector(".overlay-backdrop")
  ?.addEventListener("click", closeProject);

document
  .getElementById("imageOverlay")
  ?.addEventListener("click", function(e) {

    if (e.target.id === "imageOverlay") {
      closeImage();
    }
  });

/* ========================================= */
/* SMOOTH SECTION ACTIVE LINK */
/* ========================================= */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      .includes(current)
    ) {
      link.classList.add("active");
    }
  });
});

/* ========================================= */
/* PAGE LOAD ANIMATION */
/* ========================================= */

window.addEventListener("load", () => {

  document.body.style.opacity = "1";
});

/* ========================================= */
/* PARALLAX HERO EFFECT */
/* ========================================= */

window.addEventListener("mousemove", (e) => {

  const image =
    document.querySelector(".hero-image");

  if (!image) return;

  const x =
    (window.innerWidth / 2 - e.pageX) / 40;

  const y =
    (window.innerHeight / 2 - e.pageY) / 40;

  image.style.transform =
    `translate(${x}px, ${y}px)`;
});

/* ========================================= */
/* SCROLL REVEAL EFFECT */
/* ========================================= */

const revealElements =
  document.querySelectorAll(
    ".skill-card, .project-tile, .content-card"
  );

const revealOnScroll = () => {

  revealElements.forEach(el => {

    const top =
      el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      el.style.opacity = "1";
      el.style.transform =
        "translateY(0)";
    }
  });
};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

function toggleAboutCard() {

  const wrapper =
    document.getElementById("aboutWrapper");

  wrapper.classList.toggle("expanded");

  const button =
    document.querySelector(".read-more-btn");

  button.style.animation = "none";

}