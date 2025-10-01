// Affirmation Mirror - Refined Version

// Affirmations
const affirmations = [
    'You are amazing just as you are',
    'You deserve love and respect',
    'Your dreams are valid',
    'You are enough',
    'You have the power to create positive change',
    'You are valuable and unique',
    'Each day is a new opportunity',
    'Trust your process',
    'You are worthy of good things',
    'Your voice matters',
    'You are exactly where you need to be',
    'Your light shines brightly',
    'You deserve all the good things',
    'You are deeply loved',
    'Your presence is a gift'
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
    }, 300);
};

// Animate card shuffle - simple visual animation
const animateCardShuffle = (callback) => {
    const cardFront = document.querySelector('.card-front');
    const cardBack1 = document.querySelector('.card-back-1');
    const cardBack2 = document.querySelector('.card-back-2');

    // Temporarily disable pointer events
    cardFront.style.pointerEvents = 'none';

    // Add shuffling class to trigger animation
    cardFront.classList.add('shuffling');
    cardBack1.classList.add('shuffling');
    cardBack2.classList.add('shuffling');

    // After animation, just update the content without changing structure
    setTimeout(() => {
        // Remove shuffling classes
        cardFront.classList.remove('shuffling');
        cardBack1.classList.remove('shuffling');
        cardBack2.classList.remove('shuffling');

        // Re-enable pointer events
        cardFront.style.pointerEvents = 'auto';

        // Execute callback to update affirmation and background
        if (callback) callback();
    }, 600);
};

// Shuffle function
const shuffle = () => {
    const newAffirmation = getRandomAffirmation();
    const newBackgroundIndex = getRandomBackground();

    // Animate cards, then update content and background
    animateCardShuffle(() => {
        displayAffirmation(newAffirmation);
        changeBackground(newBackgroundIndex);
    });
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
