import { Request, Response } from 'express';
import { User } from '../entity/User';
import jwt from 'jsonwebtoken';

export const currentUser = async (req: Request, res: Response) => {
  const token = (req.session as any).token;

  // @ts-ignore
  const { id, username } = jwt.decode(token);
  const user = await User.findOne({
    where: {
      id,
      username,
    },
  });

  res.json({ data: user });
};
