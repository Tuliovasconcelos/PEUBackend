import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Usuario';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  idUsuario: number;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

export default class UpdateProfileService {
  public async execute({
    idUsuario,
    name,
    email,
    password,
    old_password,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository, "mysql");

    const user = await usersRepository.findById(idUsuario);

    if (!user) {
      throw new AppError('User not found.');
    }

    const userUpdateEmail = await usersRepository.findByEmail(email);

    if (userUpdateEmail && userUpdateEmail.idUsuario !== idUsuario) {
      throw new AppError('There is already one user with this email.');
    }

    if (password && !old_password) {
      throw new AppError('Old password is required.');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.senha);

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }

      user.senha = await hash(password, 8);
    }

    user.nome = name;
    user.email = email;

    await usersRepository.save(user);

    return user;
  }
}
