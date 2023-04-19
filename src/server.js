//write basic boilder plate code for server in node js. write a basic get route to send hello world to the browser. No need to connect to any database. just create as simple boiler plate lean code.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
