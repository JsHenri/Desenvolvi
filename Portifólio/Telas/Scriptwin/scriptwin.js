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