import { body } from 'express-validator';

export const validateLogin = [
  body('username')
    .not()
    .isEmpty()
    .withMessage('username should be there')
    .trim()
    .escape(),
  body('password')
    .not()
    .isEmpty()
    .withMessage('password should be there')
    .isLength({ min: 4 })
    .withMessage('password should be at least 4 characters long')
    .trim()
    .escape(),
];

export const validateRegister = [
  body('email')
    .not()
    .isEmpty()
    .withMessage('email should be there')
    .isEmail()
    .trim(),
  body('password')
    .not()
    .isEmpty()
    .withMessage('password should be there')
    .isLength({ min: 4 })
    .withMessage('password should be at least 4 characters long')
    .trim()
    .escape(),
  body('username')
    .not()
    .isEmpty()
    .withMessage('username should be there')
    .trim()
    .escape(),
  body('avatar').isURL().trim(),
];
