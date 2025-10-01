// Affirmation Mirror - JavaScript

// Default affirmations
let affirmations = [
    'Eres increíble tal como eres',
    'Mereces amor y respeto',
    'Tus sueños son válidos',
    'Eres suficiente',
    'Tienes el poder de crear cambios positivos',
    'Eres valioso y único',
    'Cada día es una nueva oportunidad',
    'Confía en tu proceso',
    'Eres digno de cosas buenas',
    'Tu voz importa'
];

// Load custom affirmations from localStorage
const loadAffirmations = () => {
    const saved = localStorage.getItem('customAffirmations');
    if (saved) {
        const custom = JSON.parse(saved);
        affirmations = [...affirmations, ...custom];
    }
};

// Save custom affirmations to localStorage
const saveCustomAffirmation = (affirmation) => {
    const saved = localStorage.getItem('customAffirmations');
    const custom = saved ? JSON.parse(saved) : [];
    custom.push(affirmation);
    localStorage.setItem('customAffirmations', JSON.stringify(custom));
};

// Get random affirmation
const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    return affirmations[randomIndex];
};

// Display affirmation
const displayAffirmation = (text) => {
    const affirmationEl = document.getElementById('affirmation');
    affirmationEl.style.animation = 'none';
    setTimeout(() => {
        affirmationEl.textContent = text;
        affirmationEl.style.animation = 'fadeIn 0.5s ease-in';
    }, 50);
};

// Event listeners
document.getElementById('newAffirmationBtn').addEventListener('click', () => {
    const newAffirmation = getRandomAffirmation();
    displayAffirmation(newAffirmation);
});

document.getElementById('addAffirmationBtn').addEventListener('click', () => {
    const form = document.getElementById('addForm');
    form.classList.toggle('hidden');
    if (!form.classList.contains('hidden')) {
        document.getElementById('customAffirmation').focus();
    }
});

document.getElementById('saveAffirmationBtn').addEventListener('click', () => {
    const input = document.getElementById('customAffirmation');
    const newAffirmation = input.value.trim();

    if (newAffirmation) {
        affirmations.push(newAffirmation);
        saveCustomAffirmation(newAffirmation);
        displayAffirmation(newAffirmation);
        input.value = '';
        document.getElementById('addForm').classList.add('hidden');
    }
});

document.getElementById('cancelBtn').addEventListener('click', () => {
    document.getElementById('customAffirmation').value = '';
    document.getElementById('addForm').classList.add('hidden');
});

// Allow Enter key to save affirmation
document.getElementById('customAffirmation').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('saveAffirmationBtn').click();
    }
});

// Initialize
loadAffirmations();
console.log('✨ Affirmation Mirror cargado ✨');
