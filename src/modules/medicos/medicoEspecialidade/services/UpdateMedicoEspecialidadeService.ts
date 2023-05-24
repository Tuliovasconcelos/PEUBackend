import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idMedicoEspecialidade: number;
  idMedico: number;
  idEspecialidade: number;
}

export default class UpdateMedicoEspecialidadeService {
  public async execute({ idMedicoEspecialidade, idMedico, idEspecialidade }: IRequest): Promise<MedicoEspecialidade | undefined> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = await medicoEspecialidadeRepository.findByMedicoAndEspecialidade(idMedicoEspecialidade);

    if (!medicoEspecialidade) {
      throw new AppError('MedicoEspecialidade not found.');
    }

    medicoEspecialidade.medico.idMedico = idMedico;
    medicoEspecialidade.especialidade.idEspecialidade = idEspecialidade;

    await medicoEspecialidadeRepository.save(medicoEspecialidade);

    return medicoEspecialidade;
  }
}
