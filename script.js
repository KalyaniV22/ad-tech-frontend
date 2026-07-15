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
// Scroll To Top Button
// ===============================

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }

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

    toast.style.background = success ? "#22c55e" : "#ef4444";

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

form.addEventListener("submit", async function (event) {

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

        showToast("Please fill all required fields", false);
        return;

    }

    // Email Validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(contact.email)) {

        showToast("Enter a valid email address", false);
        return;

    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(contact)

        });

        if (response.ok) {

            showToast("Message Sent Successfully!");

            form.reset();

        } else {

            showToast("Something Went Wrong!", false);

        }

    } catch (error) {

        console.error(error);

        showToast("Server Connection Failed!", false);

    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Send Message";

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
// Scroll Animation
// ===============================

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},

{
threshold:0.2
}

);

const animatedItems = document.querySelectorAll(

".service-card, .stat-box, .glass-card, .contact-form"

);

animatedItems.forEach(item => {

item.style.opacity = "0";

item.style.transform = "translateY(40px)";

item.style.transition = "all 0.8s ease";

observer.observe(item);

});

// ===============================
// Hero Button Ripple Effect
// ===============================

document.querySelectorAll(".btn").forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform = "translateY(-4px)";

});

button.addEventListener("mouseleave", () => {

button.style.transform = "translateY(0)";

});

});

// ===============================
// Header Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

} else {

header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

}

});

// ===============================
// Console
// ===============================

console.log("AD Tech Enterprises Website Loaded Successfully 🚀");
