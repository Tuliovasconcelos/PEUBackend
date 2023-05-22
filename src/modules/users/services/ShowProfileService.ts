import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  idUsuario: number;
}

export default class ShowProfileService {
  public async execute({ idUsuario }: IRequest): Promise<Usuario> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(idUsuario);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}
