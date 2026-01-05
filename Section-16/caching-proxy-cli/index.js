const express = require('express');
const axios = require('axios');
const yargs = require('yargs');

const app = express();
const cache = new Map(); // In-memory cache

const argv = yargs
  .option('port', {
    alias: 'p',
    description: 'Port for the caching proxy server',
    type: 'number',
    default: 3000,
  })
  .option('origin', {
    alias: 'o',
    description: 'URL of the origin server',
    type: 'string',
  })
  .option('clear-cache', {
    alias: 'c',
    description: 'Clear the cache',
    type: 'boolean',
  })
  .help()
  .alias('help', 'h').argv;

if (argv.clearCache) {
  cache.clear();
  console.log('Cache cleared!');
  process.exit(0);
}

if (!argv.origin) {
  console.error('Error: --origin is required.');
  process.exit(1);
}

const PORT = argv.port;
const ORIGIN = argv.origin;

app.use(async (req, res) => {
  const key = req.originalUrl; // Use the original URL as the cache key

  if (cache.has(key)) {
    console.log(`Cache HIT for ${key}`);
    const cachedResponse = cache.get(key);
    // Set cached headers
    for (const header in cachedResponse.headers) {
      res.setHeader(header, cachedResponse.headers[header]);
    }
    res.setHeader('X-Cache', 'HIT');
    return res.status(cachedResponse.status).send(cachedResponse.data);
  }

  try {
    console.log(`Cache MISS for ${key}. Fetching from origin: ${ORIGIN}${key}`);
    const response = await axios({
      method: req.method,
      url: `${ORIGIN}${req.originalUrl}`,
      headers: req.headers, // Forward original headers
      data: req.body, // Forward original body
    });

    // Cache the response
    cache.set(key, {
      status: response.status,
      headers: response.headers,
      data: response.data,
    });

    // Set response headers from origin
    for (const header in response.headers) {
      res.setHeader(header, response.headers[header]);
    }
    res.setHeader('X-Cache', 'MISS');
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error(`Error forwarding request: ${error.message}`);
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send('Proxy error');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Caching proxy server listening on port ${PORT}`);
  console.log(`Forwarding requests to origin: ${ORIGIN}`);
});
