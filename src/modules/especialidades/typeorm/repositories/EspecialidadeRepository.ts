import { EntityRepository, Repository } from 'typeorm';
import Especialidade from '../entities/Especialidade';

@EntityRepository(Especialidade)
export default class EspecialidadeRepository extends Repository<Especialidade> {
  public async findByName(name: string): Promise<Especialidade | undefined> {
    const especialidade = await this.findOne({
      where: {
        nome: name,
      },
    });

    return especialidade;
  }

  public async findById(id: number): Promise<Especialidade | undefined> {
    const especialidade = await this.findOne(id);
    return especialidade;
  }
}
