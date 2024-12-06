document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.left = e.clientX - 100 + 'px';
    cursor.style.top = e.clientY - 100 + 'px';
    cursor.style.transition = 'all 0.5s ease';
    cursor.style.zIndex = '9999';
    document.body.appendChild(cursor);
    
    setTimeout(() => cursor.remove(), 1000);
});

document.querySelectorAll('.menu-item').forEach(button => {
    button.addEventListener('mouseover', (e) => {
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.position = 'fixed';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    });
});

document.getElementById('impossible-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Désolé, nous ne prenons pas de réservations les jours se terminant par "di"');
    // Inverser tous les inputs
    document.querySelectorAll('input').forEach(input => {
        input.value = input.value.split('').reverse().join('');
    });
});

const fonts = ['Comic Sans MS', 'Papyrus', 'Impact', 'Arial', 'Times New Roman'];
document.querySelectorAll('.random-font-list li').forEach(item => {
    setInterval(() => {
        item.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
        item.style.transform = `rotate(${Math.random() * 360}deg)`;
    }, 1000);
});

window.addEventListener('scroll', () => {
    document.body.style.transform = `rotate(${window.scrollY / 50}deg)`;
});

setInterval(() => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}, 1000);

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.transform = `scale(${Math.random() * 2}) rotate(${Math.random() * 360}deg)`;
    });
});

const errorMessages = [
    "Erreur 404 : Votre réservation s'est enfuie",
    "Le chef est allergique à ce jour de la semaine",
    "Nos tables sont parties en vacances",
    "Veuillez réessayer pendant une éclipse solaire",
    "Le restaurant n'existe que dans une dimension parallèle"
];

document.querySelector('.shrinking-button').addEventListener('click', () => {
    alert(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
});