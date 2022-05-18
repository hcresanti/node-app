const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

// Request = user's incoming data
// Response = my outgoing data
app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf-8') );
});

app.listen(process.env.PORT || 3000,  () => console.log('App is available on http://localhost:3000'))