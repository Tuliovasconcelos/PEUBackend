import { EntityRepository, Repository } from 'typeorm';
import Clinica from '../entities/Clinica';

@EntityRepository(Clinica)
export default class ClinicaRepository extends Repository<Clinica> {
  public async findByName(nome: string): Promise<Clinica | null> {
    const clinica = await this.findOne({
      where: {
        nome,
      },
    });

    return clinica || null;
  }

  public async findById(id: number): Promise<Clinica | null> {
    const clinica = await this.findOne({
      where: {
        idClinica: id,
      },
    });

    return clinica || null;
  }
}
