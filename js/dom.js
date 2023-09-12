/*const element=document.getElementById('figura');

console.log(element);*/


function circulo(){
    const figura=document.getElementById('figura');
    const titulo = document.querySelector('.titulo');
    figura.classList.toggle('circulo');
    titulo.textContent='CIRCULO'
}

function hor(){
    const figura=document.getElementById('figura');
    const titulo = document.querySelector('.titulo')
    figura.classList.toggle('hor');
    titulo.textContent='HORIZONTAL'
    
}

function ver(){
    const figura=document.getElementById('figura');
    const titulo = document.querySelector('.titulo');
    figura.classList.toggle('ver')
    titulo.textContent='VERTICAL'

}

function gif(){
    const figura=document.querySelector('#figura');
    figura.classList.toggle('gif');
}

function degradado(){
    const figura=document.querySelector('#figura');
    const titulo = document.querySelector('.titulo');
    figura.classList.toggle('degradado');
    titulo.textContent='DEGRADADO'
}


function movetop(){
    const figura=document.querySelector('#figura')
    figura.classList.toggle('top')
}

function movelow(){
    const figura=document.querySelector('#figura')
    figura.classList.toggle('low')
}

function moveleft(){
    const figura=document.querySelector('#figura')
    figura.classList.toggle('left')
}

function moveright(){
    const figura=document.querySelector('#figura')
    figura.classList.toggle('right')
}

function diagonal(){
    const figura=document.querySelector('#figura')
    figura.classList.toggle('diagonal')
}

function panelLateral(){
    const panel = document.querySelector('.panel-lateral')
    panel.classList.toggle('active')
}

function panelsuperior(){
    const panel = document.querySelector('.panel-superior')
    panel.classList.toggle('active') 
}

