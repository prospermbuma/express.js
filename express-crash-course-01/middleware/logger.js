import fs from 'fs/promises';
import colors from 'colors';

// Logger middleware
const logger = (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'yellow',
        PUT: 'blue',
        DELETE: 'red',
    };

    const color = methodColors[req.method] || 'white';

    const appendFile = async () => {
        try {
            const currentDate = new Date().toLocaleString();
            await fs.appendFile('./logs.txt', `Date: ${currentDate}\nMethod: ${req.method}\nEndpoint: ${req.url}\nUrl: ${req.protocol}://${req.get('host')}${req.originalUrl}\n-------------------------------------------\n`);
        } catch (err) {
            console.log(err);
        }
    };
    appendFile();
    console.log(`Method: ${req.method}\nUrl: ${req.protocol}://${req.get('host')}${req.originalUrl}`[color]);
    next();
};

export default logger;