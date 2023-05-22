import { EntityRepository, Repository } from 'typeorm';
import Patologia from '../entities/Patologia';

@EntityRepository(Patologia)
export default class PatologiaRepository extends Repository<Patologia> {
  public async findByDescription(descricao: string): Promise<Patologia | null> {
    const patologia = await this.findOne({
      where: {
        descricao: descricao,
      },
    });

    return patologia || null;
  }

  public async findById(idPatologia: number): Promise<Patologia | null> {
    const patologia = await this.findOne({
      where: {
        idPatologia: idPatologia,
      },
    });

    return patologia || null;
  }
}
