import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
export default class UserTokensRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | null> {
    const userToken = await this.findOne({
      where: {
        token,
      },
    });

    return userToken || null;
  }

  public async generate(idUsuario: number): Promise<UserToken> {
    const userToken = this.create({
      idUsuario,
    });

    await this.save(userToken);

    return userToken;
  }
}
