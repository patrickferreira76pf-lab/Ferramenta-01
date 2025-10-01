import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Serve static files from the React app
app.use(express.static(join(__dirname, 'public')));

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});