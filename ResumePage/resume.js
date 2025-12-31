const listItems = document.querySelectorAll("#skills ul li");
let itemIndex = 0;
let charIndexMain = 0;
let charIndex = 0;
const typeTextSpan = document.getElementById("type-text");
const words = ["Developer", "Designer", "Learner", "Innovator"];
let wordIndex = 0;
let isDeleting = false;

//type word in main
function type() {
    const currentWord = words[wordIndex];
   if (isDeleting) {
        typeTextSpan.textContent = currentWord.substring(0, charIndexMain - 1);
        charIndexMain--;
   } else {
        typeTextSpan.textContent = currentWord.substring(0, charIndexMain + 1);
        charIndexMain++;
   }

   let delay = 150;
   if (!isDeleting && charIndexMain === currentWord.length) {
        delay = 1000;
        isDeleting = true;
   } else if (isDeleting && charIndexMain === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500;
   }

   setTimeout(type, delay);

}
type();
//skills word
listItems.forEach(li => {
    li.dataset.text = li.textContent;
    li.textContent = "";
});
function typeSkills() {
    if (itemIndex >= listItems.length) return;
    const currentItem = listItems[itemIndex];
    const fullText = currentItem.dataset.text;

    currentItem.style.opacity = 1;

    if (charIndex < fullText.length) {
        currentItem.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeSkills, 70); 
    } else {
        charIndex = 0;
        itemIndex++;
        setTimeout(typeSkills, 300);
    }
}

typeSkills();




fetch("resume.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("work-experience-grid");

        data.experience.forEach(experience => {
            container.innerHTML += `
            <div class="work-experience-card">
            <h3>${experience.title}<h3>
            <h4>${experience.employer}</h4>
            <div class="date-location">
                <h6>${experience.date}</h6>
                <h6>${experience.location}</h6>
            </div>
            <ul>${experience.description
                .map(item => `<li>${item}</li>`)
                .join("")}
                </ul>
            </div>`;
        })
    })