// --- ERROR HANDLING MIDDLEWARE (Day 7: Error Handling & AI Debugging) ---

// Catch-all function for any error that happens in the app
const errorHandler = (err, req, res, next) => {
  // 1. Determine the status code (default to 500 if not set)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  // 2. Log the error to the console (for AI/Developer debugging - Day 7)
  console.error(`Status: ${statusCode} | Message: ${err.message}`);

  // 3. Send a clean JSON response back to the client
  res.status(statusCode).json({
    success: false,
    message: err.message,
    // 4. In development, show the stack trace to help with AI prompting (Day 7)
    // In production, keep it null for security!
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };
