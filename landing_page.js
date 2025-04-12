// Navbar scroll background
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  // Mobile toggle menu
  function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
  }
  
  // Contact form validation
  function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const msg = document.getElementById("form-msg");
  
    if (!name.value || !email.value || !message.value) {
      msg.textContent = "Please fill in all fields.";
      msg.style.color = "red";
      return false;
    }
  
    msg.textContent = "Message sent successfully!";
    msg.style.color = "lightgreen";
    return false; // prevent actual submission
  }
  
  // Scroll reveal effect
  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("visible");
      }
    }
  });
  
  // Newsletter modal popup
  setTimeout(() => {
    document.getElementById("newsletter-modal").style.display = "flex";
  }, 4000);
  
  function closeModal() {
    document.getElementById("newsletter-modal").style.display = "none";
  }
  
  function subscribeNewsletter() {
    const email = document.getElementById("newsletter-email").value;
    const msg = document.getElementById("newsletter-msg");
    if (!email.includes("@")) {
      msg.textContent = "Please enter a valid email.";
      msg.style.color = "red";
    } else {
      msg.textContent = "Thanks for subscribing!";
      msg.style.color = "lightgreen";
    }
  }