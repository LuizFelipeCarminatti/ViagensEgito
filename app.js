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