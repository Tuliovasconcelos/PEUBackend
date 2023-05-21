import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Usuario';
import UsersRepository from '../typeorm/repositories/UsersRepository';

export default class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository,"mysql");

    const users = usersRepository.find();

    return users;
  }
}
