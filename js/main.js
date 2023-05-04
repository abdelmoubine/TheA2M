document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    var errorMessage = document.querySelector(".error-message");
  
    emailInput.addEventListener("input", function() {
      if (emailInput.validity.valid) {
        errorMessage.textContent = ""; // reset the error message if the email is valid
        emailInput.classList.remove("invalid-input");
      } else {
        errorMessage.textContent = "Please enter a valid email address"; // show the error message if the email is invalid
        errorMessage.style.color = "red";
        emailInput.classList.add("invalid-input");
      }
    });
  });


  function scrollToTop() {
    $('html, body').animate({scrollTop: 0}, 'slow');
  }

  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Display scroll-to-top button when scrolling down
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-to-top").style.display = "block";
  } else {
    document.querySelector(".scroll-to-top").style.display = "none";
  }
}

// Scroll to top on button click
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop - 70,
  });
}

const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
  });
});

function smoothScroll(target) {
  if (target === '#top') {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  } else {
    const element = document.querySelector(target);
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop - 70,
    });
  }
}


const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });



    
    const learnMoreBtn = document.getElementById("learn-more-btn");
    learnMoreBtn.addEventListener("click", function (event) {event.preventDefault();
      alert("Under Maintenance");
    });


    function showMessage(message) {
      alert(message);
    }