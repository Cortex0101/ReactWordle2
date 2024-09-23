const i18n = {
    t: (key) => key, // Mock translation function to just return the key
    changeLanguage: () => new Promise(() => { }),
    use: () => i18n, // Chainable use function for mocking
    init: () => new Promise(() => { }),
};

export default i18n;