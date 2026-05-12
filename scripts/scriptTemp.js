const stickyContainer = document.querySelector('.sticky_container')
const scrollHorizontal = document.querySelector('.scroll_horizontal')
const hybridSection = document.querySelector('.hybrid_section')

function transform() {
    const distance = scrollHorizontal.scrollWidth - window.innerWidth;
    const start = hybridSection.offsetTop + window.innerHeight;
    const end = start + hybridSection.offsetHeight - window.innerHeight;

    const scrollY = window.scrollY;

    const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    scrollHorizontal.style.transform = `translateX(${-progress * distance}px)`;
}

//responsive section height 
function updateHeight() {
    const scrollDistance = scrollHorizontal.scrollWidth - window.innerWidth;
    hybridSection.style.height = window.innerHeight + scrollDistance * 4 + 'px'; 
}

window.addEventListener('load', ()  => {
    updateHeight(), 
    transform()
});
window.addEventListener('resize', updateHeight);
window.addEventListener('scroll', transform);

//Api fetch
async function getPeople() {
  const response = await fetch("https://fdnd.directus.app/items/person/?sort=name");
  const result = await response.json();

  const list = document.getElementById("namen");

  result.data.forEach(person => {
    const li = document.createElement("li");
    li.textContent = person.name;
    list.appendChild(li);
  });
}

getPeople();