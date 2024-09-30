export const defaultUser = {
    isAuthenticated: false,
    user: null,
    uuid: null,
};

export const defaultSettings = {
    theme: 'dark',
    language: 'dk',
    colorBlind: false,
    swappedButtons: false,
    disableAnimations: true,
};

export const defaultStatistics = {
    gamesPlayed: 35,
    winPercentage: 94,
    averageGuesses: 5.32,
    currentStreak: 4,
    bestStreak: 32,
    daysInRow: 7,
    rating: 85,
    guessDistribution: [
        { guessNr: 1, percentage: 0.25, total: 20 },
        { guessNr: 2, percentage: 0.35, total: 28 },
        { guessNr: 3, percentage: 0.20, total: 16 },
        { guessNr: 4, percentage: 0.10, total: 8 },
        { guessNr: 5, percentage: 0.05, total: 4 },
        { guessNr: 6, percentage: 0.03, total: 2 },
        { guessNr: 'F', percentage: 0.02, total: 1 }
    ]
};

export const SUPPORTED_LANGUAGES = [
    { code: 'da', name: 'Dansk' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' }
];

export const ANIMATION_DURATION = 500;