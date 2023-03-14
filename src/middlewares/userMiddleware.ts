import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces';
import userBody from '../utils/userBody';

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, vocation, level, password } = req.body as User;
  const errUsername = userBody.validUsername(username);
  const errVocation = userBody.validVocation(vocation);
  const errLevel = userBody.validLevel(level);
  const errPass = userBody.validPass(password);

  if (errUsername) return res.status(errUsername.status).json({ message: errUsername.message });
  if (errVocation) return res.status(errVocation.status).json({ message: errVocation.message });
  if (errLevel) return res.status(errLevel.status).json({ message: errLevel.message });
  if (errPass) return res.status(errPass.status).json({ message: errPass.message });

  next();
}