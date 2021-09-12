# Scalable Parse LiveQuery Server

## SETUP
- React Todo App Client - port: 3000 (client/src/utils/initialize.js)
- Parse Server - port: 1337 (parseServer/index.js)
- LiveQuery Server - port: 5000 (liveQueryServer/index.js)
- Mongo - port: 27017
- Redis - port: 6379

### If project is running, navigate to [localhost:3000](http://localhost:3000)

### Clone repo
```bash
$ git clone https://github.com/BanalitoRaulito/Scalable-Parse-LiveQuery-Server.git 
```

## Run project with one command

```bash
$ docker-compose up --build
```

### OR setup manually DBs and Servers

#### Setup DB
```bash
# runs Mongo db for storage
$ docker run --name parse-mongo-db -d mongo

# runs Redis for pub/sub
$ docker run --name parse-redis-db -d redis
```

#### Setup Servers
```bash
# Setup Client
$ cd client && npm install && yarn start

# Setup Parse Server
$ cd parseServer && npm install && node index

# Setup LiveQuery Server
$ cd liveQueryServer && npm install && node index
```



