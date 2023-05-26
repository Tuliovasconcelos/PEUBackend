import { getCustomRepository } from 'typeorm';
import ProgramaClinica from '../typeorm/entities/ProgramaClinica';
import ProgramaClinicaRepository from '../typeorm/repositories/ProgramaClinicaRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idPrograma: number;
  idClinica: number;
  status: 'A' | 'I';
}

export default class CreateProgramaClinicaService {
  public async execute({ idPrograma, idClinica, status }: IRequest): Promise<ProgramaClinica> {
    const programaClinicaRepository = getCustomRepository(ProgramaClinicaRepository);
    const programaClinicaExists = await programaClinicaRepository.findByIdProgramaAndIdClinica(idPrograma, idClinica);
    if (programaClinicaExists) {
      throw new AppError('There is already a ProgramaClinica with this Programa and Clinica');
    }

    const programaClinica = programaClinicaRepository.create({
      programa: { idPrograma },
      clinica: { idClinica },
      status,
      dataAlteracao: new Date(),
    });

    await programaClinicaRepository.save(programaClinica);

    return programaClinica;
  }
}
