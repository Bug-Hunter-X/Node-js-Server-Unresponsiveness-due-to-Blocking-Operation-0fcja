const http = require('http');

const server = http.createServer((req, res) => {
  // Offload the long-running task to a worker thread (using a hypothetical worker for brevity)
  const worker = new Worker('./worker.js');
  worker.on('message', message => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World! ' + message);
  });
  worker.postMessage(null);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// worker.js
const { parentPort } = require('worker_threads');

for (let i = 0; i < 1000000000; i++) {
    // Do nothing
}
parentPort.postMessage('Processed');