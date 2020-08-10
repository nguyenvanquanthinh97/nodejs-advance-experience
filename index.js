const { Worker } = require('worker_threads');
const crypto = require('crypto');
const express = require('express');
const app = express();

// 	I'm a child, I'm going to act like a server
// and do nothing else
app.get('/', (req, res, next) => {
	const worker = new Worker('./worker.js');

	worker.on('message', (counter) => {
		res.send('' + counter);
	});
});

app.get('/fast', (req, res, next) => {
	res.send('This was fast');
});

app.listen(3000);
