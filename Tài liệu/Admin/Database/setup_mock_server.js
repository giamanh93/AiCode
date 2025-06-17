const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mock_data.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdDate = new Date().toISOString();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);

// Start server
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
  console.log(`API endpoints available at:`);
  console.log(`- http://localhost:${port}/categories`);
  console.log(`- http://localhost:${port}/units`);
  console.log(`- http://localhost:${port}/materials`);
  console.log(`- http://localhost:${port}/suppliers`);
  console.log(`- http://localhost:${port}/customers`);
  console.log(`- http://localhost:${port}/purchaseOrders`);
  console.log(`- http://localhost:${port}/salesOrders`);
  console.log(`- http://localhost:${port}/inventory`);
  console.log(`- http://localhost:${port}/payments`);
}); 