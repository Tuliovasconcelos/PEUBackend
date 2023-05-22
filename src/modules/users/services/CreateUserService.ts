import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  nome: string;
  email: string;
  senha: string;
  idTipoUsuario: number;
}

export default class CreateUserService {
  public async execute({ nome, email, senha, idTipoUsuario }: IRequest): Promise<Usuario> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.', 400);
    }

    const hashedPassword = await hash(senha, 8);

    const user = usersRepository.create({
      nome,
      email,
      senha: hashedPassword,
      idTipoUsuario
    });

    await usersRepository.save(user);

    return user;
  }
}
