const container = document.querySelector('.container_scroll')
const scroll = document.querySelector('.scroll_content') 
const line = document.querySelector('path')
const hybridSection = document.querySelector('body > div')

//Fetching 
async function fetchPersonalData() {
    try {
        const response = await fetch('https://fdnd.directus.app/items/person/332');
        const data = await response.json();
        if(data) {
            selectElements(data);
        }
    } catch (error) {
        console.log('Error:', error)
    }
}

fetchPersonalData();

async function fetchEverybody() {
    try {
        const res = await fetch('https://fdnd.directus.app/items/person/?fields=id,name,github_handle'); 
        const data = await res.json(); 
        console.log(data);
    } catch (error) {
        console.log('Error:', error)
    }
}

selectElements = (data) => {
    Object.entries(data.data).forEach(([key, value]) => {
        const element = document.querySelector(`[data='${key}']`);
        if (element) {
            element.textContent = value;
        }
    });   
}

//Hybrid scroll
window.addEventListener('scroll', () => {
    transform(container);
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop 
    let sectionPercentage = (((window.scrollY - offsetTop) / window.innerHeight) * 100); 
    sectionPercentage = sectionPercentage < 0 ? 0 : sectionPercentage > 400 ? 400 : sectionPercentage;
    scroll.style.transform = `translate3d(${-(sectionPercentage)}vw, 0, 0)`
} 

// Line draw on scroll
const lenght = line.getTotalLength();
line.style.strokeDasharray = lenght
line.style.strokeDashoffset = lenght

let active
const options = {
    root: null,
    threshold: 0,
    rootMargin: `-${window.innerHeight}px 0px 0px 0px`
}

const observer = new IntersectionObserver(entries => { 
    active = entries[0].isIntersecting
}, options)

observer.observe(hybridSection);

window.onscroll = () => {
    if (!active) return; 

    const docHeight = (hybridSection.offsetHeight) - window.innerHeight;
    const scrollProgress = window.scrollY - hybridSection.offsetTop;
    const height = Math.min(Math.max(scrollProgress / docHeight, 0), 1);

    line.style.strokeDashoffset = lenght * (1 - height); 
}