import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idMedicoEspecialidade: number;
}

export default class ShowMedicoEspecialidadeService {
  public async execute({ idMedicoEspecialidade }: IRequest): Promise<MedicoEspecialidade | null> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = await medicoEspecialidadeRepository.findByMedicoAndEspecialidade(idMedicoEspecialidade);

    if (!medicoEspecialidade) {
      throw new AppError('MedicoEspecialidade not found.');
    }
    return medicoEspecialidade || null;
  }
}
