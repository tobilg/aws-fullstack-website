// See 
// * https://www.jeremydaly.com/build-serverless-api-serverless-aws-lambda-lambda-api/
// * https://www.npmjs.com/package/lambda-api

// Require and init API router module
const api = require('lambda-api')({
	logger: { 
		level: 'debug',
		access: true,
		stack: true,
		timestamp: () => new Date().toUTCString()
	}
});

// Register default routes
api.register(require('./routes/defaults'), {});

// Register v1 routes
api.register(require('./routes/v1/api'), { prefix: `/${process.env.BASE_PATH}` });

// Declare Lambda handler
module.exports.router = async (event, context) => {
	// Log event
	console.log(event);
	// Run the request
	return await api.run(event, context)
}