fetch("resume.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("work-experience-grid");

        data.experience.forEach(experience => {
            container.innerHTML += `
            <div class="work-experience-card">
            <h3>${experience.title}<h3>
            <h4>${experience.employer}</h4>
            <h6>${experience.date} ${experience.location}</h6>
            <p>${experience.description}</p>
            </div>`;
        })
    })