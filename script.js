const btnActive = document.querySelector('.btnActive')
const btnClose = document.querySelector('.btnClose')
const navMob = document.querySelector('.navMob')
const overlay = document.querySelector('.overlay')

btnActive.addEventListener('click', function() {
    btnActive.classList.remove('active')
    btnClose.classList.add('active')
    navMob.classList.add('active')
    overlay.classList.add('active')
})

btnClose.addEventListener('click', function() {
    btnActive.classList.add('active')
    btnClose.classList.remove('active')
    navMob.classList.remove('active')
    overlay.classList.remove('active')
})