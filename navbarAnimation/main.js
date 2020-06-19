const hamburger = document.querySelector('.hamburger')
const cancel = document.querySelector('.cancel')
const sidebar = document.querySelector('.sidebar')
const links = document.querySelectorAll('.sidebar__links__link')

const handleShowSidebar = () => {
    sidebar.classList.add('showNavbar')

    setTimeout(() => {
        links.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('fadeInRight')
            }, 70 * index)
        })
    }, 1000)

}

const handleHideSidebar = () => {

    links.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fadeOutRight')
        }, 70 * index)
    })

    setTimeout(() => {
        sidebar.classList.remove('showNavbar')
    }, 70 * (links.length * 3))
}


hamburger.addEventListener('click', handleShowSidebar)
cancel.addEventListener('click', handleHideSidebar)