document.addEventListener("DOMContentLoaded", function () {
  loadSection("gallery");
});

// Function to dynamically load content
function loadSection(section) {
  const contentDiv = document.getElementById("content");
  let sectionContent = "";

  switch (section) {
    case "gallery":
      sectionContent = `
           <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="Images/1.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/2.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/3.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/4.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/5.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/6.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/7.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/8.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/9.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/10.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/11.png" alt="slide">
                </div>
                <div class="carousel-item">
                  <img src="Images/12.png" alt="slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
        `;
      break;
  }

  // Sets the inner HTML of the content container to the section content above
  contentDiv.innerHTML = sectionContent;

  if (section === "gallery") {
    // Initialize the carousel when the "Image Gallery" section is loaded
    $('#carouselExampleControls').carousel();
  }
}


//php -S localhost:8000
