// Efeito de digitação no título
const heroTitle = document.querySelector('#hero h1');
const text = "Olá, eu sou Jonathan Gustavo";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heroTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 25); // Velocidade da digitação (100ms por caractere)
    }
}

// Inicia o efeito de digitação
typeWriter();

// Animação ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Dispara a animação quando 10% da seção estiver visível
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});



// Efeito de hover nos projetos
const projetos = document.querySelectorAll('.projeto');

projetos.forEach(projeto => {
    projeto.addEventListener('mouseenter', function() {
        projeto.style.transform = 'translateY(-10px)';
        projeto.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    projeto.addEventListener('mouseleave', function() {
        projeto.style.transform = 'translateY(0)';
        projeto.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
