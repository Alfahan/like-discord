import { signInValues, signUpValues } from "../utils/schema/user";
import * as userRepositories from '../repositories/userRepositories'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp = async (data: signUpValues, file: Express.Multer.File) => {

    const isEmailExists = await userRepositories.isEmailExists(data.email);

    if (isEmailExists > 1) {
        throw new Error('Email already taken')
    }

    const user = await userRepositories.createUser({
        ...data,
        password: bcrypt.hashSync(data.password, 12)
    }, file.filename)

    const token = jwt.sign({ id: user.id }, process.env.SECRET_AUTH ?? "", {
        expiresIn: "1 days"
    })

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo_url,
        token: token
    }
} 

export const signIn = async (data: signInValues) => {
    const isEmailExists = await userRepositories.isEmailExists(data.email)

    if (isEmailExists === 0) {
        throw new Error("Invalid email or password")
    }

    const user = await userRepositories.findUserByEmail(data.email)

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    const secret = process.env.SECRET_AUTH;
    if (!secret) {
        throw new Error("Missing JWT secret");
    }

    const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: "1d"
    });

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo_url,
        token: token
    }
}