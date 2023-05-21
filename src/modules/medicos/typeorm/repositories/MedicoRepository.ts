import { EntityRepository, Repository } from 'typeorm';
import  Medico  from '../entities/Medico';

@EntityRepository(Medico)
export default class MedicoRepository extends Repository<Medico> {
  public async findByName(name: string): Promise<Medico | undefined> {
    const medico = await this.findOne({
      where: {
        nome: name,
      },
    });

    return medico;
  }

  public async findById(id: number): Promise<Medico | undefined> {
    const medico = await this.findOne(id);
    return medico;
  }
  
  public async findByCRM(crm: string): Promise<Medico | undefined> {
    const medico = await this.findOne({
      where: {
        crm,
      },
    });

    return medico;
  }
}
