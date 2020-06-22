const hamburger = document.querySelector('.hamburger')
const cancel = document.querySelector('.cancel')
const sidebar = document.querySelector('.sidebar')
const links = document.querySelectorAll('.sidebar__links__link')

const handleShowSidebar = () => {
    sidebar.classList.add('showNavbar')
    links.forEach(element => {
        element.classList.remove('fadeOutRight')
        element.classList.add('fadeInRight')
    })
}

const handleHideSidebar = () => {


    links.forEach(element => {
        element.classList.add('fadeOutRight')
        element.classList.remove('fadeInRight')
    })

    setTimeout(() => {
        sidebar.classList.remove('showNavbar')
        links.forEach(element => element.classList.remove('fadeOutRight'))
    }, 1000)

}


hamburger.addEventListener('click', handleShowSidebar)
cancel.addEventListener('click', handleHideSidebar)