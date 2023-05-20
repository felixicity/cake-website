const primaryHeader = document.querySelector('.primary-header')
const scrollWatcher = document.createElement('div')
const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')
const Nav = document.querySelector('.nav-list')

scrollWatcher.setAttribute('data-scroll-watcher', ' ');
primaryHeader.before(scrollWatcher)


const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking' , !entries[0].isIntersecting)
} , {rootMargin:"500px 0px 0px 0px"})

navObserver.observe(scrollWatcher) 


openNav.addEventListener("click", () =>{
    Nav.style.display = "block"
}
)

closeNav.addEventListener("click", () => {
    Nav.style.display = "none"
 } 
)