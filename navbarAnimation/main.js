const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')
const links = document.querySelectorAll('.sidebar__links__link')

const handleShowSidebar = () => {
    sidebar.classList.toggle('showNavbar')
}


hamburger.addEventListener('click', handleShowSidebar)