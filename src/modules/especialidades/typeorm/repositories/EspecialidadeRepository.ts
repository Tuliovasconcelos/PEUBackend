import { EntityRepository, Repository } from 'typeorm';
import Especialidade from '../entities/Especialidade';

@EntityRepository(Especialidade)
export default class EspecialidadeRepository extends Repository<Especialidade> {
  public async findByName(name: string): Promise<Especialidade | null> {
    const especialidade = await this.findOne({
      where: {
        nome: name,
      },
    });

    return especialidade || null;
  }

  public async findById(id: number): Promise<Especialidade | null> {
    const especialidade = await this.findOne({ where: { idEspecialidade: id } });
    return especialidade || null;
  }
}
