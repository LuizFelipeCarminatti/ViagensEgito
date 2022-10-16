let btn = document.querySelector('[btn-click]')
let aside = document.getElementById('aside')

btn.addEventListener('click', function () {
    aside.classList.toggle('efeitoMenu')
})