import { Request, Response } from 'express';

export const logout = async (_req: Request, res: Response) => {
  res.clearCookie('ch-token');
  res.redirect('/');
};
