import express from 'express';
import url from 'url';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

// Port
const PORT = process.env.PORT || 8000;

// Filename and Directory name (Path + Url)
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname);

// Create an instance of an Express application
const app = express();

// Middlewares
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup static folder (Static server) - Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Logger middleware
app.use(logger);

// API Endpoint
app.use('/api/posts', posts);

// ErrorHandler middlewares
app.use(notFound);
app.use(errorHandler);

// Starting the Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));