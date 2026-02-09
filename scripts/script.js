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
