import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idMedicoEspecialidade: number;
}

export default class DeleteMedicoEspecialidadeService {
  public async execute({ idMedicoEspecialidade }: IRequest): Promise<void> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);


    const medicoEspecialidade = await medicoEspecialidadeRepository.findByMedicoAndEspecialidade(idMedicoEspecialidade);

    if (!medicoEspecialidade) {
      throw new AppError('MedicoEspecialidade not found.');
    }

    await medicoEspecialidadeRepository.delete(idMedicoEspecialidade);
  }
}
