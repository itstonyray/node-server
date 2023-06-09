const http = require('http');

const host = "localhost"; 
const port = 8080

const tasks = [
    {
      id: 1,
      description: 'Walking the dog',
      status: false
    },
    {
      id: 2,
      description: 'Go to the gym',
      status: true
    },
    {
      id: 3,
      description: 'Prepare the report',
      status: false
    }
  ];

const server = http.createServer((req, res) =>{   
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(tasks))
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});