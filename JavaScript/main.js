const header = document.querySelector('header')
const openMenu = document.querySelector('.open_menu')
const closeMenu = document.querySelector('.close_menu')
const nav_vertical = document.querySelector('.nav_vertical')
const link_vertical = document.querySelectorAll('.link_vertical')
const tecnologias_iconos = document.querySelector('.tecnologias_iconos')
const contenedor_proyectos = document.querySelector('.contenedor_proyectos')

fetch('./../JSON/tecnologias.json')
    .then(res => res.json())
    .then(data => {
        data.tecnologias.forEach(icono => {
            tecnologias_iconos.innerHTML += `
            <picture title="Icono de ${icono.name}">
                <img src="${icono.url}" alt="Icono de ${icono.name}">
            </picture>
            `
        })
    })
fetch('./../JSON/proyectos.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data.proyectos[0].img.length)
        data.proyectos.forEach( info_proyecto => {
            const contenedorProyectos = document.createElement('article')
            contenedorProyectos.classList.add('proyecto')
            const proyecto = `
                    <div class="left">
                        <picture class="proyecto_imagen">
                        <img src="${info_proyecto.img[0].url}" alt="${info_proyecto.name}">
                        </picture>
                        <div class="buttons">
                            <a href="${info_proyecto.url}">
                                <img src="./../IMG/iconos/github.png" alt="Ir a repositorio en github de ${info_proyecto.name}" title="Ir a repositorio en github de ${info_proyecto.name}">
                            </a>
                            <a href="${info_proyecto.url_Live}">
                                <img src="./../IMG/iconos/web.png" alt="Ir a la pagina en vivo de ${info_proyecto.name}" title="Ir a la pagina en vivo de ${info_proyecto.name}">
                            </a>
                            <button class="anterior">
                                <img src="./../IMG/flecha.png" alt="Anterior">
                            </button>
                            <button class="siguiente">
                                <img class="siguiente2" src="./../IMG/flecha.png" alt="Siguiente">
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <h3>${info_proyecto.name}.</h3>
                        <p>
                            ${info_proyecto.descripcion}
                        </p>
                        <div class="tecnologiasUsadas">
                        </div>
                    </div>
            `
            let imagen_actual = 0
            contenedorProyectos.innerHTML = proyecto
            const cantidad_imagenes = info_proyecto.img.length
            const fondos = contenedorProyectos.querySelector('.proyecto_imagen')
            const siguiente = contenedorProyectos.querySelector('.siguiente2')
            const anterior = contenedorProyectos.querySelector('.anterior')
            const tecnologiasUsadas = contenedorProyectos.querySelector('.tecnologiasUsadas') 
            info_proyecto.tecnologias.forEach( tecno => {
                tecnologiasUsadas.innerHTML += `
                <picture class="icon">
                    <img src="${tecno.url}" alt="${tecno.name}">
                    <h4>${tecno.name}</h4>
                </picture>
                `
            })


            siguiente.addEventListener('click', (e) => {
                imagen_actual++
                if(imagen_actual>=cantidad_imagenes){
                    imagen_actual = 0
                }
                fondos.innerHTML = `
                    <img src="${info_proyecto.img[imagen_actual].url}" alt="${info_proyecto.name}">
                `
            })
            anterior.addEventListener('click', (e) => {
                imagen_actual--
                if(imagen_actual<0){
                    imagen_actual = cantidad_imagenes - 1
                }
                fondos.innerHTML = `
                    <img src="${info_proyecto.img[imagen_actual].url}" alt="${info_proyecto.name}">
                `
            })
            contenedor_proyectos.appendChild(contenedorProyectos)
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