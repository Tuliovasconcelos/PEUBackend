
import { getCustomRepository } from 'typeorm';
import ProgramaClinica from '../typeorm/entities/ProgramaClinica';
import ProgramaClinicaRepository from '../typeorm/repositories/ProgramaClinicaRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idProgramaClinica: number;
}

export default class ShowProgramaClinicaService {
  public async execute({ idProgramaClinica }: IRequest): Promise<ProgramaClinica> {
    const programaClinicaRepository = getCustomRepository(ProgramaClinicaRepository);

    const programaClinica = await programaClinicaRepository.findByIdProgramaClinica(idProgramaClinica);

    if (!programaClinica) {
      throw new AppError('ProgramaClinica not found.');
    }

    return programaClinica;
  }
}
