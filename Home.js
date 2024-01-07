document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropdown");
  var dropdownTrigger = document.querySelector(".dropbtn");
  var dropdownContent = document.getElementById("dropdown-content");

  dropdownTrigger.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropdown");
  var dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    }
  });
});
.about-me-container {
  display: flex;
  flex-wrap: wrap;
}

.image-container {
  flex: 50%; /* Adjusts to take up half the container's width */
}

.image-container img {
  width: 100%;
  height: auto;
}

.text-container {
  flex: 50%; /* Adjusts to take up the other half of the container's width */
  padding: 20px;
}

.text-container h1 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .image-container, .text-container {
    flex: 100%; /* Stacks the sections on smaller screens */
  }
}

