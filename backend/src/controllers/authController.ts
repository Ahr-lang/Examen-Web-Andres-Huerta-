import { Request, Response, RequestHandler } from 'express';
import { validateEmployee } from '../handlers/authHandler.ts';

// Controller: recibe peticiones HTTP
export const login: RequestHandler = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required.' });
    return;
  }

  const employeeData = validateEmployee(username, password);

  if (!employeeData) {
    res.status(401).json({ error: 'Invalid username or password.' });
    return;
  }

  res.status(200).json({ message: 'Login successful!', employee: employeeData });
}
