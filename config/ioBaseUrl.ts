let ioBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
	// Code specific to development mode
	ioBaseUrl = 'http://localhost:8000';
	console.log('Running in development mode');
} else {
	ioBaseUrl = 'https://pyc-trade-api-de5130f4c952.herokuapp.com';
	// Code specific to production mode
	console.log('Running in production mode');
}
console.log('baseUrl', ioBaseUrl);
export default ioBaseUrl;
