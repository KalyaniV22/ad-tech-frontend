const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const contact = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        company: document.getElementById("company").value,

        message: document.getElementById("message").value

    };

    fetch("http://localhost:8085/contact",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(contact)

    })

    .then(response => response.json())

    .then(data =>{

alert("✅ Thank You! Your message has been submitted successfully.");
        form.reset();

    })

    .catch(error =>{

        alert("Something went wrong!");

        console.log(error);

    });

});