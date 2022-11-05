let btn = document.querySelector('[btn-click]')
let aside = document.getElementById('aside')

btn.addEventListener('click', function () {
    aside.classList.toggle('efeitoMenu')
})

document.querySelectorAll('#btn-link').forEach(link => {
    link.onclick = function () {
        aside.classList.remove('efeitoMenu')
    }
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
    if (window.pageYOffset > 500) {
        scroll.style.display = 'block'
    } else {
        scroll.style.display = 'none'
    }

})

scroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

let article1 = document.getElementById('article1')
let article2 = document.getElementById('article2')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        article1.style.transition = 'all 1s'
        article1.style.transform = 'translate(0px)'
        article1.style.opacity = 1
    } if (window.pageYOffset > 800) {
        article2.style.transition = 'all 1s'
        article2.style.transform = 'translate(0px)'
        article2.style.opacity = 1
    }
})