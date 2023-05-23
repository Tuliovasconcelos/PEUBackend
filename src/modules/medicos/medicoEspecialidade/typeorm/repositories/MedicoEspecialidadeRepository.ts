import { EntityRepository, Repository } from 'typeorm';
import MedicoEspecialidade from '../entities/MedicoEspecialidade';

@EntityRepository(MedicoEspecialidade)
export default class MedicoEspecialidadeRepository extends Repository<MedicoEspecialidade> {
  public async findByMedicoId(idMedico: number): Promise<MedicoEspecialidade[]> {
    const medicosEspecialidades = await this.find({
      where: {
        medico: { idMedico: idMedico },
      },
    });

    return medicosEspecialidades;
  }

  public async findByEspecialidadeId(idEspecialidade: number): Promise<MedicoEspecialidade[]> {
    const medicosEspecialidades = await this.find({
      where: {
        especialidade: { idEspecialidade: idEspecialidade },
      },
    });

    return medicosEspecialidades;
  }

  public async findByMedicoAndEspecialidade(idMedicoEspecialidade: number): Promise<MedicoEspecialidade | null> {
    const medicoEspecialidade = await this.findOne({
      where: {
        idMedicoEspecialidade: idMedicoEspecialidade
      },
    });

    return medicoEspecialidade || null;
  }
}
