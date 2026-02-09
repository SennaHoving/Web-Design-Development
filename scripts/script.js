const panelHeroFirst = document.querySelector('section:nth-of-type(1) > div:first-of-type');
const panelHeroLast = document.querySelector('section:nth-of-type(1) > div:last-of-type');

async function fetchData() {
    try {
        const response = await fetch('https://fdnd.directus.app/items/person/332');
        const data = await response.json();
        if(data) {
            selectElements(data);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData();

selectElements = (data) => {
    Object.entries(data.data).forEach(([key, value]) => {
        const element = document.querySelector(`[data="${key}"]`);
        if (element) {
            element.textContent = value;
        }
    });   
}

window.onscroll = () => {
    if(window.scrollY < window.innerHeight) {
        panelHeroFirst.style.transform = `translateY(${window.scrollY * -0.5}px)`;
        panelHeroLast.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
}

