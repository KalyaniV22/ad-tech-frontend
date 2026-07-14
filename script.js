const form = document.getElementById("contactForm");

const API_URL = "https://ad-tech-enterprises-2.onrender.com";

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const contact = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value
    };

    fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Server Error: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        alert("✅ Thank You! Your message has been submitted successfully.");
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("❌ Something went wrong! Please try again.");
    });

});});
