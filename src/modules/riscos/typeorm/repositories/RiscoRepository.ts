import { EntityRepository, Repository } from 'typeorm';
import Risco from '../entities/Risco';

@EntityRepository(Risco)
export default class RiscoRepository extends Repository<Risco> {
  public async findByDescription(descricao: string): Promise<Risco | null> {
    const risco = await this.findOne({
      where: {
        descricao: descricao,
      },
    });

    return risco || null;
  }

  public async findById(idRisco: number): Promise<Risco | null> {
    const risco = await this.findOne({ where: { idRisco: idRisco } });
    return risco || null;
  }
}
