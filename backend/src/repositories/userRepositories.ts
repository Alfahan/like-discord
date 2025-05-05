import { RoleType } from '../generated/prisma';
import prisma from '../utils/prisma';
import { signUpValues } from '../utils/schema/user';
import crypto from 'node:crypto';

export const isEmailExists = async (email: string) => {
    return await prisma.user.count({
        where: {
            email: email,
        },
    });
};

export const findRole = async (role: RoleType) => {
    return await prisma.role.findFirstOrThrow({
        where: {
            role: role,
        },
    });
};

export const createUser = async (data: signUpValues, photo: string) => {
    const role = await findRole('USER');

    return await prisma.user.create({
        data: {
            email: data.email,
            password: data.password,
            name: data.name,
            role_id: role.id,
            photo,
        },
    });
};

export const findUserByEmail = async (email: string) => {
    return await prisma.user.findFirstOrThrow({
        where: {
            email: email,
        },
    });
};

export const createPasswordReset = async (email: string) => {
    try {
        const user = await findUserByEmail(email);
    
        const token = crypto.randomBytes(16).toString('hex');
    
        return await prisma.passwordReset.create({
            data: {
                user_id: user.id,
                token,
            },
        });
    } catch (error) {
        // Menangani error
        console.error('Error creating password reset:', error);
        throw error; 
    }
};
