import express from 'express';
const mongoose = require('mongoose');
import multer from 'multer';
import cors from 'cors';
//const cors = require('cors');
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const connectToDb = require('./db/connect.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(join(__dirname, 'uploads')));

app.use(
  cors({
    origin: '*', // Replace with your client URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  })
);

// In-memory storage for videos
let videos = [];

// Ensure uploads directory exists
const uploadsDir = join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// API Routes
app.post('/api/videos', upload.single('video'), (req, res) => {
  try {
    console.log('Received video upload request');
    console.log('Request body:', req.body);
    console.log('File:', req.file);

    const { title, description } = req.body;
    const filename = req.file.filename;

    const newVideo = {
      id: Date.now().toString(),
      title,
      description,
      filename,
      uploadDate: new Date(),
    };

    videos.push(newVideo);
    console.log('Video saved:', newVideo);
    res.status(201).json(newVideo);
  } catch (error) {
    console.error('Error uploading video:', error);
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/videos', (req, res) => {
  try {
    console.log('Fetched videos:', videos);
    res.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ message: 'Error fetching videos' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

app.listen(5173, 'localhost', () => {
  console.log(`Server is running on port ${port}`);
});
