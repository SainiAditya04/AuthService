const { StatusCodes } = require('http-status-codes');

class AppErrors extends Error {
    constructor(
        name = 'ApiError',
        message = 'something went wrong',
        explaination = 'something went wrong',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        this.message = message,
            this.name = name,
            this.explaination = explaination,
            this.statusCode = statusCode
    }
}

module.exports = AppErrors;