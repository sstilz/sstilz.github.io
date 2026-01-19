const express = require('express');
const app = express();
const path = require('path');

// Serves files from a "public" folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>My Clean Website</h1><p>Running on Node.js</p>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));