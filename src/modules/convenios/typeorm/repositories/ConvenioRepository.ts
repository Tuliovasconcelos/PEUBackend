import { EntityRepository, Repository } from 'typeorm';
import Convenio from '../entities/Convenio';

@EntityRepository(Convenio)
export default class ConvenioRepository extends Repository<Convenio> {
  public async findByName(nome: string): Promise<Convenio | null> {
    const convenio = await this.findOne({
      where: {
        nome,
      },
    });

    return convenio || null;
  }

  public async findById(id: number): Promise<Convenio | null> {
    const convenio = await this.findOne({
      where: {
        idConvenio: id,
      },
    });

    return convenio || null;
  }
}
