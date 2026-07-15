// ===============================
// Mobile Menu Toggle
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

// ===============================
// Scroll To Top
// ===============================

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    scrollTop.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// Toast Notification
// ===============================

function showToast(message, success = true) {

    const toast = document.getElementById("toast");

    toast.innerText = message;

    toast.style.background = success ? "#16a34a" : "#dc2626";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}

// ===============================
// Contact Form API
// ===============================

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

const API_URL = "https://ad-tech-enterprises-2.onrender.com/contact";

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const contact = {

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        company: document.getElementById("company").value.trim(),

        message: document.getElementById("message").value.trim()

    };

    // Validation

    if (
        contact.name === "" ||
        contact.email === "" ||
        contact.message === ""
    ) {

        showToast("Please fill all required fields.", false);
        return;

    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(contact.email)) {

        showToast("Please enter a valid email.", false);
        return;

    }

    // Loading State

    submitBtn.disabled = true;

    submitBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Sending Message...
    `;

    showToast("Please wait... Sending your message.");

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(contact)

        });

        if (response.ok) {

            showToast("✅ Message Sent Successfully!");

            form.reset();

        } else {

            showToast("❌ Failed to send message.", false);

        }

    } catch (error) {

        console.error(error);

        showToast("❌ Server is unreachable.", false);

    }

    submitBtn.disabled = false;

    submitBtn.innerHTML = `
        <i class="fa-solid fa-paper-plane"></i>
        Send Message
    `;

});

// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(
".service-card, .glass-card, .stat-box, .contact-form"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s ease";

    observer.observe(item);

});

// ===============================
// Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.08)";

    }

});

// ===============================
// Console
// ===============================

console.log("🚀 AD Tech Enterprises Website Loaded Successfully");
