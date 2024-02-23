const header = document.querySelector('header')
const openMenu = document.querySelector('.open_menu')
const closeMenu = document.querySelector('.close_menu')
const nav_vertical = document.querySelector('.nav_vertical')
const link_vertical = document.querySelectorAll('.link_vertical')
const tecnologias_iconos = document.querySelector('.tecnologias_iconos')

fetch('./../JSON/tecnologias.json')
    .then(res => res.json())
    .then(data => {
        console.log(data.tecnologias)
        data.tecnologias.forEach(icono => {
            tecnologias_iconos.innerHTML += `
            <picture title="Icono de ${icono.name}">
                <img src="${icono.url}" alt="Icono de ${icono.name}">
            </picture>
            `
        })
    })

// Reducir header al bajar
window.addEventListener('scroll', () => {
    if(window.innerWidth > 500){
        header.classList.toggle('active', window.scrollY > 70)
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