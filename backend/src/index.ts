import express, { Express } from 'express';
import cors from 'cors';
import { login } from './controllers/authController.ts';

const app: Express = express();
const port = 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.post('/login', login);

// Server
app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
