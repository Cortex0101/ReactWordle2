export const getLocalStorageItem = (key, defaultValue) => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : defaultValue;
};

export const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key) => {
    localStorage.removeItem(key);
};