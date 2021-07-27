# burger-api
Tutorial burger api

## Development

1. create api db
ex : db.json

2. Install json server(terminal)
ex : sudo npm install -g json-server 

3. Install package for online db
ex : sudo npm install json -g https://registry.npmjs.org

4. Start json server
ex : json-server --watch db.json

5. Go to the api url path in localhost
ex : http://localhost:3000/burgers

## Deployment

1. Sign in to heroku
2. Open terminal
3. Push api db to remote repo
ex : git push origin HEAD
4. initiliase project backend
ex : npm init
5. make api show up and running to heroku (installation)
ex : npm i
ex : npm i json-server
ex : npm i json-server --registry https://registry.npmjs.org

6. make a script
-open package.json, under scripts add
ex : "start" : "node server.js"
7. create backend file
ex : server.js
8. add required module in server.js

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

9. add .gitignore files and add the project to remote repository

10. install heroku
ex : brew tap heroku/brew && brew install heroku

11. add registry to the heroku
ex : npm install -g heroku --registry https://registry.npmjs.org

12. check heroku version to identify its been install
ex : heroku --version

13. create a project link using heroku
ex : heroku create project-name

14. sign in to heroku
ex : heroku login

15. create a project in heroku
ex : heroku create project-name

16. push the project to heroku
ex : git push heroku main

17. open the project on heroku
ex : heroku open