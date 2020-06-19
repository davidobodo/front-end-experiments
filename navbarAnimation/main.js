const hamburger = document.querySelector('.hamburger')
const cancel = document.querySelector('.cancel')
const sidebar = document.querySelector('.sidebar')
const links = document.querySelectorAll('.sidebar__links__link')

const handleShowSidebar = () => {
    sidebar.classList.add('showNavbar')

    links.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fadeInLeft')
        }, (100 * index) - (30 * index))
    })
}

const handleHideSidebar = () => {

    links.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fadeOutRight')
            // if (index == (links.length - 1)) {
            //     console.log(index)
            //     sidebar.classList.remove('showNavbar')
            // }
        }, ((links.length + 1) * 100) - (100 * index))
    })

    setTimeout(() => {

    })
}


hamburger.addEventListener('click', handleShowSidebar)
cancel.addEventListener('click', handleHideSidebar)