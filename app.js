import express from 'express';
const app = express();
import api from './routes/index.js';

app.use(express.json());
app.use('/api', api);

export default app;