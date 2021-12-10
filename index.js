const https = require('https')
// const options = {
// 	hostname: 'www.google.com',
// 	port: 443,
// 	path: '/',
// 	method: 'GET'
// }

// const req = https.request(options, res => {
// 	console.log(`statusCode: ${res.stateCode}`)

// 	res.on('data', d => {
// 		process.stdout.write(d)
// 	})
// })

// req.on('error', error => {
// 	console.error(error)
// })

// req.end()

const data = new TextEncoder().encode(
	JSON.stringify({
		todo: 'Buy the milk'
	})
)

const options2 = {
	hostname: 'www.google.com',
	port: 443,
	path: '/',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Content-Length': data.length
	}
}

const req = https.request(options2, res => {
	console.log(`statusCode: ${res.statusCode}`)

	res.on('data', d => {
		process.stdout.write(d)
	})
})

req.on('error', error => {
	console.error(error)
})

req.write(data)
req.end()