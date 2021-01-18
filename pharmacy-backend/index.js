const http = require('http');

const app = require('./app');
const { PORT } = require('./config');

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Application running on http://127.0.0.1:${PORT}.`);
});
