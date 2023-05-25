import { getCustomRepository } from 'typeorm';
import ProgramaClinicaRepository from '../typeorm/repositories/ProgramaClinicaRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idProgramaClinica: number;
}

export default class DeleteProgramaClinicaService {
  public async execute({ idProgramaClinica }: IRequest): Promise<void> {

    const programaClinicaRepository = getCustomRepository(ProgramaClinicaRepository);

    const programaClinicaExists = await programaClinicaRepository.findByIdProgramaClinica(idProgramaClinica);

    if (programaClinicaExists) {
      throw new AppError('There is already a ProgramaClinica with this Programa and Clinica');
    }

    await programaClinicaRepository.delete(idProgramaClinica);
  }
}
