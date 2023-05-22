import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';

interface IRequest {
  medicoId: number;
  especialidadeId: number;
}

export default class CreateMedicoEspecialidadeService {
  public async execute({ medicoId, especialidadeId }: IRequest): Promise<MedicoEspecialidade> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = medicoEspecialidadeRepository.create({
      medico: { idMedico: medicoId },
      especialidade: { idEspecialidade: especialidadeId },
    });

    await medicoEspecialidadeRepository.save(medicoEspecialidade);

    return medicoEspecialidade;
  }
}
