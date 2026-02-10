const panelHeroFirst = document.querySelector('section:nth-of-type(1) > div:first-of-type');
const panelHeroLast = document.querySelector('section:nth-of-type(1) > div:last-of-type');

//Fetching 
async function fetchPersonalData() {
    try {
        const response = await fetch('https://fdnd.directus.app/items/person/332');
        const data = await response.json();
        if(data) {
            selectElements(data);
        }
    } catch (error) {
        console.log("Error:", error)
    }
}

fetchPersonalData();

async function fetchEverybody() {
    try {
        const res = await fetch('https://fdnd.directus.app/items/person/?fields=id,name,github_handle'); 
        const data = await res.json(); 
        console.log(data);
    } catch (error) {
        console.log("Error:", error)
    }
}

selectElements = (data) => {
    Object.entries(data.data).forEach(([key, value]) => {
        const element = document.querySelector(`[data="${key}"]`);
        if (element) {
            element.textContent = value;
        }
    });   
}

// Hero scroll effect 
window.onscroll = () => {
    if(window.scrollY < window.innerHeight) {
        panelHeroFirst.style.transform = `translateY(${window.scrollY * -0.5}px)`;
        panelHeroLast.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
}

//Line draw on scroll
let line = document.querySelector('path');
const lenght = line.getTotalLength();
line.style.strokeDasharray = lenght
line.style.strokeDashoffset = lenght

window.onscroll = () => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const height = scrollY / docHeight;

    line.style.strokeDashoffset = lenght * (1 - height); 
}