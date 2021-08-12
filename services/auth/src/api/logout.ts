import { Request, Response } from 'express';

export const logout = async (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect('/');
    }
  });
};
