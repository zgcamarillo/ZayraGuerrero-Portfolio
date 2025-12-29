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