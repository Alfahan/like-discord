import type { NextFunction, Request, Response } from 'express';
import { signInSchema, signUpSchema } from '../utils/schema/user';
import fs from 'node:fs';
import * as userService from '../services/userService';

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Upload photo is required',
            });
        }

        const parse = signUpSchema.safeParse(req.body);

        if (!parse.success) {
            const errorMessage = parse.error.issues.map((err) => `${err.path} - ${err.message}`);

            fs.unlinkSync(req.file.path);

            return res.status(400).json({
                success: false,
                message: 'Validation Error',
                detail: errorMessage,
            });
        }

        const newUser = await userService.signUp(parse.data, req.file);

        return res.json({
            success: true,
            message: 'Create user success',
            data: newUser,
        });
    } catch (err) {
        next(err);
    }
};

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parse = signInSchema.safeParse(req.body);

        if (!parse.success) {
            const errorMessage = parse.error.issues.map((err) => `${err.path} - ${err.message}`);

            return res.status(400).json({
                success: false,
                message: 'Validation Error',
                detail: errorMessage,
            });
        }

        const data = await userService.signIn(parse.data);

        return res.json({
            success: true,
            message: 'Sign in success',
            data,
        });
    } catch (err) {
        next(err);
    }
};

export const getEmailReset = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parse = signInSchema.pick({ email: true }).safeParse(req.body);

        if (!parse.success) {
            const errorMessage = parse.error.issues.map((err) => `${err.path} - ${err.message}`);

            return res.status(400).json({
                success: false,
                message: 'Validation Error',
                detail: errorMessage,
            });
        }

        await userService.getEmailReset(parse.data.email);

        return res.json({
            success: true,
            message: 'Reset link sen to email',
        });
    } catch (error) {}
};
