const toggleButton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("open")
})

fetch("contactpage.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("socials-container");

        data.socials.forEach(social => {
            container.innerHTML += `
            <div class="social-card">
            <a href="${social.link}">
            <h2>${social.type}</h2>
            <h4>${social.handle}</h4>
            <p>${social.message}</p>
            </a></div>`
        }
        )
    })
const form = document.querySelector(".contact-form-container");
const fName = document.querySelector("#fname");
const lName = document.querySelector("#lname");
const email = document.querySelector("#email");
const pNumber = document.querySelector("#phonenumber");

form.addEventListener("submit", function(e) {
    let errors = [];

    if (fName.value.trim()==="") errors.push("First Name is required.");
    if (lName.value.trim()==="") errors.push("Last Name is required.");
    if (email.value.trim()==="") errors.push("Email is required.");
    if (pNumber.value.trim()==="") errors.push("Phone Number is required.");
    if (errors.length > 0) {
        e.preventDefault(); 
        alert(errors.join("\n"));
    } else {
        alert("Form submitted successfully!");
    }
})