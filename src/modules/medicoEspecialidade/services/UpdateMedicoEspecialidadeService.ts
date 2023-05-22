import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';
import AppError from '@shared/errors/AppError';

interface IRequest {
  medicoEspecialidadeId: number;
  medicoId: number;
  especialidadeId: number;
}

export default class UpdateMedicoEspecialidadeService {
  public async execute({ medicoEspecialidadeId, medicoId, especialidadeId }: IRequest): Promise<MedicoEspecialidade | undefined> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = await medicoEspecialidadeRepository.findByMedicoAndEspecialidade(medicoEspecialidadeId);

    if (!medicoEspecialidade) {
      throw new AppError('Associação não encontrada');
    }

    medicoEspecialidade.medico.idMedico = medicoId;
    medicoEspecialidade.especialidade.idEspecialidade = especialidadeId;

    await medicoEspecialidadeRepository.save(medicoEspecialidade);

    return medicoEspecialidade;
  }
}
