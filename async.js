const https = require('https');

const start = Date.now();
https
	.request('https://www.google.com', (res) => {
		res.on('data', (data) => {});

		res.on('end', () => {
			console.log(Date.now() - start);
		});
	})
	.end();
