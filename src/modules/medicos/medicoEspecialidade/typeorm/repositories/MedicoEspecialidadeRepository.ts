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

  public async findByMedicoAndEspecialidade(id: number): Promise<MedicoEspecialidade | null> {
    const medicoEspecialidade = await this.findOne({
      where: {
        idMedicoEspecialidade: id
      },
    });

    return medicoEspecialidade || null;
  }
}
