import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';

interface IRequest {
  medicoEspecialidadeId: number;
  medicoId: number;
  especialidadeId: number;
}

export default class UpdateMedicoEspecialidadeService {
  public async execute({ medicoEspecialidadeId, medicoId, especialidadeId }: IRequest): Promise<MedicoEspecialidade | undefined> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = await medicoEspecialidadeRepository.findOne(medicoEspecialidadeId);

    if (!medicoEspecialidade) {
      // Lançar uma exceção informando que a associação não foi encontrada
    }

    medicoEspecialidade.medico = { idMedico: medicoId };
    medicoEspecialidade.especialidade = { idEspecialidade: especialidadeId };

    await medicoEspecialidadeRepository.save(medicoEspecialidade);

    return medicoEspecialidade;
  }
}

