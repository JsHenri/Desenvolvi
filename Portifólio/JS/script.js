var blocos = document.querySelectorAll('div.bloco')

blocos[0].addEventListener('mouseenter',()=>{
    let titulo = document.getElementById('tituloAu')
        titulo.classList.add('show')
        titulo.classList.remove('hide')
})
blocos[0].addEventListener('mouseleave',()=>{
    let titulo = document.getElementById('tituloAu')
        titulo.classList.add('hide')
        titulo.classList.remove('show')
})
blocos[1].addEventListener('mouseenter',()=>{
    let titulo = document.getElementById('tituloDw')
        titulo.classList.add('show')
        titulo.classList.remove('hide')
})
blocos[1].addEventListener('mouseleave',()=>{
    let titulo = document.getElementById('tituloDw')
        titulo.classList.add('hide')
        titulo.classList.remove('show')
})
blocos[2].addEventListener('mouseenter',()=>{
    let titulo = document.getElementById('tituloBd')
        titulo.classList.add('show')
        titulo.classList.remove('hide')
})
blocos[2].addEventListener('mouseleave',()=>{
    let titulo = document.getElementById('tituloBd')
        titulo.classList.add('hide')
        titulo.classList.remove('show')
})
blocos[3].addEventListener('mouseenter',()=>{
    let titulo = document.getElementById('tituloLP')
        titulo.classList.add('show')
        titulo.classList.remove('hide')
})
blocos[3].addEventListener('mouseleave',()=>{
    let titulo = document.getElementById('tituloLP')
        titulo.classList.add('hide')
        titulo.classList.remove('show')
})
blocos[4].addEventListener('mouseenter',()=>{
    let titulo = document.getElementById('tituloCd')
        titulo.classList.add('show')
        titulo.classList.remove('hide')
})
blocos[4].addEventListener('mouseleave',()=>{
    let titulo = document.getElementById('tituloCd')
        titulo.classList.add('hide')
        titulo.classList.remove('show')
})

function autenter(){
    window.location.href = "Telas/indexaut.html"
}