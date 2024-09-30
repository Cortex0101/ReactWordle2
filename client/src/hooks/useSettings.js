import { useState, useEffect } from 'react';
import i18n from '../i18n';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';
import { defaultSettings, SUPPORTED_LANGUAGES, ANIMATION_DURATION } from '../models/User';

const useSettings = () => {
    const [settings, setSettings] = useState(defaultSettings);

    useEffect(() => {
        const storedSettings = getLocalStorageItem('settings', defaultSettings);
        setSettings(storedSettings);
        document.documentElement.setAttribute('data-bs-theme', storedSettings.theme);
        document.documentElement.setAttribute('color-blind', storedSettings.colorBlind);
    }, []);

    const updateSettings = (newSettings) => {
        setSettings(newSettings);
        setLocalStorageItem('settings', newSettings);
    };

    const toggleTheme = () => {
        const newTheme = settings.theme === 'light' ? 'dark' : 'light';
        const updatedSettings = { ...settings, theme: newTheme };
        updateSettings(updatedSettings);
        document.documentElement.setAttribute('data-bs-theme', newTheme);
    };

    const changeLanguage = (lng) => {
        const updatedSettings = { ...settings, language: lng };
        updateSettings(updatedSettings);
        i18n.changeLanguage(lng);
    };

    const toggleColorBlind = () => {
        const newColorBlind = !settings.colorBlind;
        const updatedSettings = { ...settings, colorBlind: newColorBlind };
        updateSettings(updatedSettings);
        document.documentElement.setAttribute('color-blind', newColorBlind);
    };

    const toggleSwappedButtons = () => {
        const newSwappedButtons = !settings.swappedButtons;
        const updatedSettings = { ...settings, swappedButtons: newSwappedButtons };
        updateSettings(updatedSettings);
        document.documentElement.setAttribute('swapped-buttons', newSwappedButtons);
    };

    const toggleDisableAnimations = () => {
        const newDisableAnimations = !settings.disableAnimations;
        const updatedSettings = { ...settings, disableAnimations: newDisableAnimations };
        updateSettings(updatedSettings);
    };

    return {
        settings,
        toggleTheme,
        changeLanguage,
        toggleColorBlind,
        toggleSwappedButtons,
        toggleDisableAnimations,
        SUPPORTED_LANGUAGES,
        ANIMATION_DURATION,
    };
};

export default useSettings;