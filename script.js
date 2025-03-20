document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        alert('Obrigado por visitar meu portfólio!');
    });
});



const heroTitle = document.querySelector('#hero h1');
const text = "Olá, eu sou Jonathan Gustavo";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heroTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Velocidade da digitação
    }
}

typeWriter();
