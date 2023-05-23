import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProgramaRepository from '../typeorm/repositories/ProgramaRepository';

interface IRequest {
  idPrograma: number;
}

export default class DeleteProgramaService {
  public async execute({ idPrograma }: IRequest): Promise<void> {
    const programaRepository = getCustomRepository(ProgramaRepository);
    const programa = await programaRepository.findById(idPrograma);

    if (!programa) {
      throw new AppError('Program not found');
    }

    await programaRepository.remove(programa);
  }
}
