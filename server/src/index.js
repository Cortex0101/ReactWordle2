const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static client files from the "dist" folder
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Serve locales (translations) from "client/public/locales"
app.use('/locales', express.static(path.join(__dirname, '../../client/public/locales')));

// Serve index.html on any unmatched route (for React Router support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});