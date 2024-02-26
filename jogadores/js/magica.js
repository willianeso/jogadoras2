// DOM
const bt02 = document.querySelector('#btAnaCarol')
const bt01 = document.querySelector('#btAnaCris')
const bt03 = document.querySelector('#btJaque')
const bt04 = document.querySelector('#btPaula')
const bt05 = document.querySelector('#btGaray')
const bt06 = document.querySelector('#btTandara')

// EVENTOS
bt02.addEventListener('click', anacarol)
bt01.addEventListener('click', anacris)
bt03.addEventListener('click', jaque)
bt04.addEventListener('click', paula)
bt05.addEventListener('click', garay)
bt06.addEventListener('click', tandara)

//FUNÇÕES
function anacarol() {
    icon.src = "images/anacarolina.jpg"
}

function anacris() {
    icon.src = "images/ana-cristina-volei-jpg.jpg"
}

function jaque() {
    icon.src = "images/jaquelinecarvalho.jpg"
}

function paula() {
    icon.src = "images/Paula-Pequeno.jpg"
}

function garay() {
    icon.src = "images/fernanda garay.png"
}

function tandara() {
    icon.src = "images/tandaracaxeita.jpg"
}