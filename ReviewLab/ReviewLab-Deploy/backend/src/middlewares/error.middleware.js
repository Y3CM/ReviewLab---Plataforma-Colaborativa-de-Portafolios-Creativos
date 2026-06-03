const errorHandler = (err, req, res, next) => {
  console.error('[ERROR]', err);

  let status = err.status || err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  if (err.array) {
    status = 400;
    message = 'Validation Error';
    return res.status(status).json({
      status: 'error',
      message: message,
      errors: err.array()
    });
  }

  if (err.code) {
    if (err.code === '23505') {
      status = 409;
      message = 'Duplicate entry';
    } else if (err.code === '23503') {
      status = 400;
      message = 'Invalid reference';
    }
  }

  res.status(status).json({
    status: 'error',
    message: message,
    ...(process.env.NODE_ENV === 'development' && { 
      error: err.message,
      code: err.code
    })
  });
};

module.exports = errorHandler;
