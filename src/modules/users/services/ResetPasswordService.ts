import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { isAfter, addHours } from 'date-fns';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import UserTokensRepository from '../typeorm/repositories/UserTokensRepository';

interface IRequest {
  token: string;
  senha: string;
}

export default class ResetPasswordService {
  public async execute({ token, senha }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const userToken = await userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User Token does not exist.', 400);
    }

    const user = await usersRepository.findById(Number(userToken.idUsuario));

    if (!user) {
      throw new AppError('User does not exist.', 400);
    }

    const tokenCreatedAt = userToken.dataCriacao;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.', 400);
    }

    user.senha = await hash(senha, 8);

    await usersRepository.save(user);
  }
}
