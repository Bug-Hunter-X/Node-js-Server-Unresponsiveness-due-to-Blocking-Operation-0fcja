# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in the request handler blocks the event loop, causing the server to become unresponsive.  The `server.js` file contains the problematic code, while `serverSolution.js` provides a solution using asynchronous operations.

## Problem

The original code executes a computationally intensive `for` loop within the request handler. This blocks the event loop, preventing the server from processing other requests while the loop is running.  This results in the server hanging or becoming unresponsive.

## Solution

The solution uses asynchronous operations or offloads the long-running task to a worker thread to prevent blocking the event loop.  The server remains responsive and can handle other requests concurrently.