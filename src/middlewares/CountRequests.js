function countRequests(req, res, next) {
  const method = req.method;

  console.count(method);
  console.count('Total requests');

  return next();
}

module.exports = countRequests;
