import { Request, Response } from 'express';
import { User } from '../entity/User';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  const { username, email, password, avatar } = req.body;

  // check if username is available
  const userExist = await User.findOne({ where: { username, email } });
  if (!!userExist) {
    return res.status(409).json({
      errors: [
        {
          field: 'username',
          message: 'Username or email already exists',
        },
        {
          field: 'email',
          message: 'Username or email already exists',
        },
      ],
    });
  }

  const hashedPassword = await argon2.hash(password, {
    hashLength: 14,
  });

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    avatar,
    is_admin: false,
    is_verified: false,
  }).save();

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      is_admin: user.is_admin,
    },
    'JWT_SECRET',
    {
      expiresIn: '1h',
    }
  );

  req.session = {
    // @ts-ignore
    token,
  };
  return res.json({
    data: user,
    success: true,
  });
};
