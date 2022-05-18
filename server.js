const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Test Custom Data API listening on port ${port}!`);
});
