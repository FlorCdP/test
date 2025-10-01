// Affirmation Mirror - Refined Version

// Affirmations
const affirmations = [
    'Eres increíble tal como eres',
    'Mereces amor y respeto',
    'Tus sueños son válidos',
    'Eres suficiente',
    'Tienes el poder de crear cambios positivos',
    'Eres valioso y único',
    'Cada día es una nueva oportunidad',
    'Confía en tu proceso',
    'Eres digno de cosas buenas',
    'Tu voz importa',
    'Estás exactamente donde necesitas estar',
    'Tu luz brilla intensamente',
    'Mereces todas las cosas buenas',
    'Eres amado profundamente',
    'Tu presencia es un regalo'
];

// Track current indices to avoid repetition
let currentAffirmationIndex = 0;
let currentBackgroundIndex = 0;
let usedAffirmations = [];
let usedBackgrounds = [];

// Get random unique affirmation
const getRandomAffirmation = () => {
    if (usedAffirmations.length === affirmations.length) {
        usedAffirmations = [];
    }

    let availableAffirmations = affirmations.filter((_, index) => !usedAffirmations.includes(index));
    let randomIndex = Math.floor(Math.random() * availableAffirmations.length);
    let affirmationText = availableAffirmations[randomIndex];
    let actualIndex = affirmations.indexOf(affirmationText);

    usedAffirmations.push(actualIndex);
    return affirmationText;
};

// Get random unique background
const getRandomBackground = () => {
    if (usedBackgrounds.length === backgrounds.length) {
        usedBackgrounds = [];
    }

    let availableBackgrounds = backgrounds.map((_, index) => index).filter(index => !usedBackgrounds.includes(index));
    let randomIndex = availableBackgrounds[Math.floor(Math.random() * availableBackgrounds.length)];

    usedBackgrounds.push(randomIndex);
    return randomIndex;
};

// Change background
const changeBackground = (index) => {
    const backgroundEl = document.getElementById('background');
    backgroundEl.style.opacity = '0';

    setTimeout(() => {
        backgroundEl.innerHTML = backgrounds[index];
        backgroundEl.style.opacity = '1';
    }, 400);
};

// Display affirmation with animation
const displayAffirmation = (text) => {
    const affirmationEl = document.getElementById('affirmation');
    const cardEl = document.getElementById('card');

    // Fade out
    affirmationEl.style.opacity = '0';
    affirmationEl.style.transform = 'scale(0.85) translateY(20px)';

    setTimeout(() => {
        affirmationEl.textContent = text;

        // Fade in
        setTimeout(() => {
            affirmationEl.style.opacity = '1';
            affirmationEl.style.transform = 'scale(1) translateY(0)';
        }, 50);
    }, 350);
};

// Shuffle function
const shuffle = () => {
    const newAffirmation = getRandomAffirmation();
    const newBackgroundIndex = getRandomBackground();

    displayAffirmation(newAffirmation);
    changeBackground(newBackgroundIndex);
};

// Event listener for shuffle button
document.getElementById('shuffleBtn').addEventListener('click', shuffle);

// Initialize with first background and affirmation
document.addEventListener('DOMContentLoaded', () => {
    const initialBackgroundIndex = getRandomBackground();
    changeBackground(initialBackgroundIndex);

    // Mark the first affirmation as used
    usedAffirmations.push(0);
});

console.log('✨ Affirmation Mirror loaded ✨');
