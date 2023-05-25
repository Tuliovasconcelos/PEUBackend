import { EntityRepository, Repository } from 'typeorm';
import MedicoClinica from '../entities/MedicoClinica';

@EntityRepository(MedicoClinica)
export default class MedicoClinicaRepository extends Repository<MedicoClinica> {

  public async findByIdMedicoClinica(idMedicoClinica: number): Promise<MedicoClinica | null> {
    const medicoClinica = await this.findOne({ where: { idMedicoClinica: idMedicoClinica } });
    return medicoClinica || null;
  }

  public async findByIdMedico(idMedico: number): Promise<MedicoClinica[]> {
    const medicoClinicas = await this.find({
      where: {
        medico: { idMedico },
      },
    });
    return medicoClinicas;
  }

  public async findByIdClinica(idClinica: number): Promise<MedicoClinica[]> {
    const medicoClinicas = await this.find({
      where: {
        clinica: { idClinica },
      },
    });
    return medicoClinicas;
  }

  public async findByIdMedicoAndIdClinica(idMedico: number, idClinica: number): Promise<MedicoClinica | null> {
    const medicoClinica = await this.findOne({
      where: {
        medico: { idMedico },
        clinica: { idClinica },
      },
    });
    return medicoClinica || null;
  }
}
