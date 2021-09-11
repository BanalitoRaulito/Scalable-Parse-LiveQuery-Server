const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: 'http://localhost:3000'}))

const httpServer = require('http').createServer(app);
const {ParseServer} = require('parse-server')

const port = 5000
httpServer.listen(port, () => console.log('Successfully started on: ' + port));

// Initialize a LiveQuery server instance, app is the express app of your Parse Server
const parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer, {
    appId: 'myAppId',
    masterKey: 'myMasterKey',
    serverURL: 'http://localhost:5000/parse',
    redisOptions: {
        no_ready_check: true,
        retry_strategy: (options) => {
            if (options.times_connected >= 3) {
                // End reconnecting after a specific number of tries and flush all commands with a individual error
                return new Error('Retry attempts exhausted');
            }
            // reconnect after
            return 1000;
        }
    },
    redisURL: 'redis://localhost:6379',
    websocketTimeout: 10 * 1000,
    cacheTimeout: 60 * 600 * 1000,
    logLevel: 'VERBOSE'
});


