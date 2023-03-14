import { Request, Response } from 'express';
import { User, UserNotPassword } from '../interfaces';
import userService from '../services/userService';
import generateToken from '../utils/generateJWT';

async function create(req: Request, res: Response) {
  const user = req.body as User;
  const data = await userService.create(user);
  const { username, vocation, level, password } = data;
  const userNotPassword: UserNotPassword = { username, vocation, level };

  const token = generateToken(userNotPassword, password);

  res.status(201).json({ token });
}

export default {
  create,
};