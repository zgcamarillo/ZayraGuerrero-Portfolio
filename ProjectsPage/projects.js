const toggleButton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("open")
})

fetch("projects.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("projects-container");

        data.projects.forEach(project => {
            container.innerHTML += `
            <div class="project-card">
                <h2>${project.title}</h2>
                <h6><a href="${project.link}">View Here</a></h6>
                <video src="${project.video}" autoplay muted loop playsinline></video>
                <div class="technologies">
                    <h3>Tech Stack</h3>
                    <p>${project.technologies}<p>
                </div>
                <div class="overview">
                    <h3>Overview:</h3>
                    <p>${project.description}</p>
                </div>
                <div class="divider"></div>
            </div>`
        })

    })