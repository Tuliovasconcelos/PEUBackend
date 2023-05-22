import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/Usuario';

@EntityRepository(User)
export default class UsersRepository extends Repository<User> {
  public async findByName(name: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        nome: name,
      },
    });

    return user || undefined;
  }

  public async findById(id: number): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        idUsuario: id,
      },
    });

    return user || undefined;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user || undefined;
  }
}
