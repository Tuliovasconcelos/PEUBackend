import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Programa from '../typeorm/entities/Programa';
import ProgramaRepository from '../typeorm/repositories/ProgramaRepository';

interface IRequest {
  idPrograma: number;
}

export default class ShowProgramaService {
  public async execute({ idPrograma }: IRequest): Promise<Programa> {
    const programaRepository = getCustomRepository(ProgramaRepository);
    const programa = await programaRepository.findById(idPrograma);

    if (!programa) {
      throw new AppError('Program not found');
    }

    return programa;
  }
}
