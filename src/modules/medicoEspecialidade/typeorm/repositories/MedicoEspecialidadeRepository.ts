import { EntityRepository, Repository } from 'typeorm';
import MedicoEspecialidade from '../entities/MedicoEspecialidade';

@EntityRepository(MedicoEspecialidade)
export default class MedicoEspecialidadeRepository extends Repository<MedicoEspecialidade> {
  public async findByMedicoId(medicoId: number): Promise<MedicoEspecialidade[]> {
    const medicosEspecialidades = await this.find({
      where: {
        medico: { idMedico: medicoId },
      },
    });

    return medicosEspecialidades;
  }

  public async findByEspecialidadeId(especialidadeId: number): Promise<MedicoEspecialidade[]> {
    const medicosEspecialidades = await this.find({
      where: {
        especialidade: { idEspecialidade: especialidadeId },
      },
    });

    return medicosEspecialidades;
  }

  public async findByMedicoAndEspecialidade(medicoId: number, especialidadeId: number): Promise<MedicoEspecialidade | undefined> {
    const medicoEspecialidade = await this.findOne({
      where: {
        medico: { idMedico: medicoId },
        especialidade: { idEspecialidade: especialidadeId },
      },
    });

    return medicoEspecialidade;
  }
}
