const pino = require('pino');

const logger = pino({
    level: process.env.LOG_LEVEL || 'info', // Set default level to 'info' if LOG_LEVEL is not set
    timestamp: pino.stdTimeFunctions.isoTime
});

module.exports = logger;
