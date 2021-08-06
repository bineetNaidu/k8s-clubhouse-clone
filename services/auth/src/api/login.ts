import { Request, Response } from 'express';
import { User } from '../entity/User';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username,
    },
  });

  if (!user) {
    return res.status(400).json({
      errors: [
        {
          field: 'username',
          message: 'Username not found',
        },
      ],
    });
  }

  const passwordVerified = await argon2.verify(user.password, password);

  if (!passwordVerified) {
    return res.status(400).json({
      errors: [
        {
          field: 'password',
          message: 'Password is incorrect.',
        },
      ],
    });
  } else {
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
    res.cookie('ch-token', token);
    return res.json({
      data: user,
      success: true,
    });
  }
};
