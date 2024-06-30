const https = require('https')

const data = JSON.stringify({
	todo: '做点事情'
})

const options = {
	hostname: 'lolz.guru',
	port: 443,
	path: '/todos',
	method: 'POST',
	headers: {
		'Authorization': '8j5hgn52v0o0lfd',
		'Content-Type': 'application/json',
		'Content-Length': data.length
	}
}

req.on("error", error => {
	console.error(error)
})
const req = https.request(options, res => {
	console.log(`状态码: ${res.statusCode}`)

	res.on('data', d => {
		process.stdout.write(d)
	})
})




req.write(data)

req.end()






