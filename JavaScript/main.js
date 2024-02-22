const header = document.querySelector('header')
const openMenu = document.querySelector('.open_menu')
const closeMenu = document.querySelector('.close_menu')
const nav_vertical = document.querySelector('.nav_vertical')
const link_vertical = document.querySelectorAll('.link_vertical')


window.addEventListener('scroll', () => {
    if(window.innerWidth > 500){
        header.classList.toggle('active', window.scrollY > 0)
    }
})
link_vertical.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu.click()
    })
})
openMenu.addEventListener('click', () => {
    nav_vertical.style.left = '0px'
})
closeMenu.addEventListener('click', () => {
    nav_vertical.style.left = '-1000px'
})