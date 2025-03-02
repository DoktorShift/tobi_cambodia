// Import AOS library (assuming it's included in your HTML)
// or declare it if it's a global variable

document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
  })

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      navMenu.classList.toggle("active")

      // Animate hamburger menu
      const bars = document.querySelectorAll(".bar")
      bars.forEach((bar, index) => {
        if (menuToggle.classList.contains("active")) {
          bar.style.transform =
            index === 0
              ? "rotate(-45deg) translate(-5px, 6px)"
              : index === 1
                ? "scale(0)"
                : "rotate(45deg) translate(-5px, -6px)"
        } else {
          bar.style.transform = "none"
        }
      })
    })
  }

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        menuToggle.click()
      }
    })
  })

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Back to top button
  const backToTopButton = document.getElementById("backToTop")
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
})

// Popup Functions
function toggleContactForm() {
  const form = document.getElementById("contactForm")
  if (form.style.display === "flex") {
    closePopup(form)
  } else {
    openPopup(form)
  }
}

function openBookingPopup() {
  const popup = document.getElementById("bookingPopup")
  openPopup(popup)
}

function closeBookingPopup() {
  const popup = document.getElementById("bookingPopup")
  closePopup(popup)
}

function openPopup(popup) {
  popup.style.display = "flex"
  document.body.style.overflow = "hidden" // Prevent scrolling

  // Add animation class
  setTimeout(() => {
    popup.querySelector(".popup-content").classList.add("active")
  }, 10)
}

function closePopup(popup) {
  popup.querySelector(".popup-content").classList.remove("active")

  // Wait for animation to finish
  setTimeout(() => {
    popup.style.display = "none"
    document.body.style.overflow = "" // Re-enable scrolling
  }, 300)
}

// Close popups when clicking outside
window.addEventListener("click", (event) => {
  const contactForm = document.getElementById("contactForm")
  const bookingPopup = document.getElementById("bookingPopup")

  if (event.target === contactForm) {
    closePopup(contactForm)
  }

  if (event.target === bookingPopup) {
    closePopup(bookingPopup)
  }
})

// Form submission (prevent default for demo)
document.addEventListener("submit", (event) => {
  event.preventDefault()
  alert("Formular wurde abgeschickt! (Demo-Modus)")

  // Reset form
  event.target.reset()

  // Close popup if it's in a popup
  const popup = event.target.closest(".popup")
  if (popup) {
    if (popup.id === "contactForm") {
      toggleContactForm()
    } else if (popup.id === "bookingPopup") {
      closeBookingPopup()
    }
  }
})

