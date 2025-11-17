/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const jsonServer = require('json-server')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users } = db

    const userFromDb = users.find(
        (user) => user.username === username && user.password === password
    )

    if (userFromDb) {
        return res.json(userFromDb)
    }

    return res.status(403).json({ message: 'AUTH ERROR!' })
})

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800)
    });
    next()
})

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR)'})
    }
    next();
})

server.use(jsonServer.defaults());
server.use(router)

server.listen(8000, () => {
    console.log('server is running on 8000 port')
})