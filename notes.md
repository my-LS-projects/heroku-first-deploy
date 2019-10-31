# Notes
- create repo on GitHub
- clone
- open in editor
- add `.gitignore` ===> `npx gitignore node`
- add `package.json` (list of all dependencies app needs) ===> `npm init -y`
- add `"start": "node index.js"` for heroku to newly created `package.json`
- add `"local": "nodemon index.js"` for testing locally
- install nodemon (for local use) as development dependency  ==> `npm i -D nodemon`
- install express, import
- set up server to use express



## Dev Process
 - write code
 - commit and push
 - deployed to heroku (automatically updates when master branch updates)


## Steps to prepare our API for Heroku deployment
- install dot env as production dependency `npm i -D dotenv`
- create dynamic port for heroku `cosnt port = process.env.PORT` in index.js
- create `.env` file, set `PORT=8000`