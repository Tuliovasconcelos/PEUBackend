// updateProgramaClinicaService.ts

import { getCustomRepository } from 'typeorm';
import ProgramaClinica from '../typeorm/entities/ProgramaClinica';
import ProgramaClinicaRepository from '../typeorm/repositories/ProgramaClinicaRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idProgramaClinica: number;
  idPrograma?: number;
  idClinica?: number;
  status?: 'ativo' | 'inativo';
}

export default class UpdateProgramaClinicaService {
  public async execute({ idProgramaClinica, idPrograma, idClinica, status }: IRequest): Promise<ProgramaClinica> {
    const programaClinicaRepository = getCustomRepository(ProgramaClinicaRepository);

    const programaClinica = await programaClinicaRepository.findByIdProgramaClinica(idProgramaClinica);

    if (!programaClinica) {
      throw new AppError('ProgramaClinica not found.');
    }

    if (idPrograma) {
      programaClinica.programa.idPrograma = idPrograma;
    }

    if (idClinica) {
      programaClinica.clinica.idClinica = idClinica;
    }

    if (status) {
      programaClinica.status = status;
    }

    programaClinica.dataAlteracao = new Date();

    await programaClinicaRepository.save(programaClinica);

    return programaClinica;
  }
}
