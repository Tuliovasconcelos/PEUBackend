import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Clinica from '../typeorm/entities/Clinica';
import ClinicaRepository from '../typeorm/repositories/ClinicaRepository';

interface IRequest {
  idClinica: number;
}

export default class ShowClinicaService {
  public async execute({ idClinica }: IRequest): Promise<Clinica> {
    const clinicaRepository = getCustomRepository(ClinicaRepository);
    const clinica = await clinicaRepository.findById(idClinica);

    if (!clinica) {
      throw new AppError('Clinica not found.');
    }

    return clinica;
  }
}
