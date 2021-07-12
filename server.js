// add json server package
const jsonServer = require('json-server');
// use the package
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const port = process.env.port || 3000;

server.use(middleware);
server.use(router);

server.listen(port);