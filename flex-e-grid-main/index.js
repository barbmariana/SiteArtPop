let botaoMenu=document.querySelector('.cabecalhoMenu')
let menuLateralAbrir=document.querySelector('.menuLateral')

botaoMenu.addEventListener('click', function(){
menuLateralAbrir.classList.toggle('menuLateralAtivo')
})