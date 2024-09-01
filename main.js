document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter button");
    const products = document.querySelectorAll(".box .product");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        // Get the button text
        const buttonText = button.textContent.trim();
  
        if (buttonText === "Visos paslaugos") {
          // Show all products if "Visos paslaugos" is clicked
          products.forEach(product => {
            product.style.display = "flex";
          });
        } else {
          // Otherwise, map button text to the corresponding class
          let filterClass = "";
  
          switch (buttonText) {
            case "Pasąmonė":
              filterClass = "pasamone";
              break;
            case "Santykis su savimi":
              filterClass = "savimi";
              break;
            case "Numerologija":
              filterClass = "numerologija";
              break;
            case "Santykiai":
              filterClass = "santykiai";
              break;
            case "Antsvoris":
              filterClass = "weight";
              break;
            case "Asmeninės sesijos":
              filterClass = "personal";
              break;
            case "Kursai":
              filterClass = "kursai";
              break;
          }
  
          // Loop through each product and show/hide based on the filterClass
          products.forEach(product => {
            if (product.classList.contains(filterClass)) {
              product.style.display = "flex"; // Show matching products
            } else {
              product.style.display = "none"; // Hide non-matching products
            }
          });
        }
  
        // Optionally, add active class to the clicked button for styling
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });

  
  // Initialize EmailJS
  (function () {
    emailjs.init("DPiWXqQ7PD9pw3Ey8"); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
  })();
  
  // Add event listener for the contact form submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Send the form data using EmailJS
      emailjs.sendForm("service_mz9jide", "template_dgbxb3r", this).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert(
            "There was an error sending your message. Please try again later."
          );
        }
      );
    });
  
