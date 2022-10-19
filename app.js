let btn = document.querySelector('[btn-click]')
let aside = document.getElementById('aside')
let conteudo = document.getElementById('conteudo')

btn.addEventListener('click', function () {
    aside.classList.toggle('efeitoMenu')
})

function ano() {
    let anoAtual = document.getElementById('ano')
    let data = new Date()
    let ano = data.getFullYear()
    anoAtual.innerHTML = ano
}
ano()

let scroll = document.getElementById('scroll')
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 400){
        scroll.style.display = 'block'
    }else{
        scroll.style.display = 'none'
    }

})

scroll.addEventListener('click', () => {
    window.scrollTo(0, 0)
})