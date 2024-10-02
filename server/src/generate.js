const fs = require('fs');

const generateRandomName = () => {
    const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Katie", "Michael", "Sarah", "David", "Laura"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Hernandez"];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
};

const generateRandomStats = () => {
    const games = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    const avgGuesses = (Math.random() * 5 + 1).toFixed(2); // Random number between 1.00 and 6.00
    const rating = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    return { games, avgGuesses, rating };
};

const generatePlayers = (numPlayers) => {
    const players = [];
    for (let i = 0; i < numPlayers; i++) {
        const name = generateRandomName();
        const stats = generateRandomStats();
        players.push({ name, ...stats });
    }
    return players;
};

const numPlayers = 100;
const playerData = { players: generatePlayers(numPlayers) };

fs.writeFileSync('playerData.json', JSON.stringify(playerData, null, 2));
console.log(`Generated data for ${numPlayers} players and saved to playerData.json`);