import { EntityRepository, Repository } from 'typeorm';
import Medico from '../entities/Medico';

@EntityRepository(Medico)
export default class MedicoRepository extends Repository<Medico> {
  public async findByName(name: string): Promise<Medico | null> {
    const medico = await this.findOne({
      where: {
        nome: name,
      },
    });

    return medico || null;
  }

  public async findById(medicoId: number): Promise<Medico | null> {
    const medico = await this.findOne({
      where: {
        idMedico: medicoId,
      },
    });
    return medico || null;
  }

  public async findByCRM(crm: string): Promise<Medico | null> {
    const medico = await this.findOne({
      where: {
        crm,
      },
    });

    return medico || null;
  }
}
