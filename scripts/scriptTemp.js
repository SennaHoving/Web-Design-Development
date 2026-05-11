const stickyContainer = document.querySelector('.sticky_container')
const scrollHorizontal = document.querySelector('.scroll_horizontal')
const hybridSection = document.querySelector('.hybrid_section')

//hybrid scroll 
// window.addEventListener('scroll', (e) => {
//     transform(stickyContainer);
// })

function transform() {
    const distance = scrollHorizontal.scrollWidth - window.innerWidth;
    const start = hybridSection.offsetTop;
    const end = start + hybridSection.offsetHeight - window.innerHeight;

    const scrollY = window.scrollY;

    const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    scrollHorizontal.style.transform = `translateX(${-progress * distance}px)`;
} 

//responsive section height 
function updateHeight() {
    const scrollDistance = scrollHorizontal.scrollWidth - window.innerWidth
    hybridSection.style.height = window.innerHeight + scrollDistance + 'px'
}

window.addEventListener('load', ()  => {
    updateHeight(), 
    transform()
});
window.addEventListener('resize', updateHeight);
window.addEventListener('scroll', transform);