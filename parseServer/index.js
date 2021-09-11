const express = require('express');
const app = express();
const cors = require('cors');
const {ParseServer} = require('parse-server')

const parseServer = new ParseServer({
    databaseURI: 'mongodb://localhost:27017',
    appId: 'myAppId',
    fileKey: 'myFileKey',
    masterKey: 'mySecretMasterKey',
    liveQuery: {
        classNames: ['Test', 'TestAgain', 'Todo'],
        redisURL: 'redis://localhost:6379',
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
        }
    }
});

app.use(cors({origin: 'http://localhost:3000'}))

// Serve the Parse API at /parse URL prefix ::: MAIN ENTRY ??
app.use('/parse', parseServer);

const port = 1337;
app.listen(port, function() {
    console.log('Successfully started on: ' + port);
});

