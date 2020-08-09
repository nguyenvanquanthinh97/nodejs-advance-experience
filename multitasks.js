process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

const start = Date.now();

const doHash = () => {
	crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
		console.log('Hash:', Date.now() - start);
	});
};

const doRequest = () => {
	https
		.request('https://www.google.com', (res) => {
			res.on('data', (data) => {});

			res.on('end', () => {
				console.log(Date.now() - start);
			});
		})
		.end();
};

doRequest();

fs.readFile('./multitasks.js', (err, data) => {
	console.log('FS:', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
