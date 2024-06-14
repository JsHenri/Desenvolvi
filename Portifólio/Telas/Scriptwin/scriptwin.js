var button = document.getElementById('navopen')

function navclick(){
    button.classList.toggle('active')
}
button.addEventListener('click', ()=>{
    let navbar = document.getElementById('navbar')
    if(navbar.classList.contains('hide')){
        navbar.classList.add('show')
        navbar.classList.remove('hide')
    }else{
        navbar.classList.add('hide')
        navbar.classList.remove('show')
    }   
})
//As funções abrem uma pagina quando clicada
function autenter(){
    window.location.href = "indexaut.html"
}
function dwenter(){
    window.location.href = "indexdw.html"
}
function bdenter(){
    window.location.href = "indexbd.html"
}
function lpenter(){
    window.location.href = "indexlp.html"
}
function cdenter(){
    window.location.href = "indexcd.html"
}