import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import MedicoClinica from '../typeorm/entities/MedicoClinica';
import MedicoClinicaRepository from '../typeorm/repositories/MedicoClinicaRepository';

interface IRequest {
  idMedicoClinica: number;
}

export default class ShowMedicoClinicaService {
  public async execute({ idMedicoClinica }: IRequest): Promise<MedicoClinica> {
    const medicoClinicaRepository = getCustomRepository(MedicoClinicaRepository);
    const medicoClinica = await medicoClinicaRepository.findByIdMedicoClinica(idMedicoClinica);

    if (!medicoClinica) {
      throw new AppError('MedicoClinica not found');
    }

    return medicoClinica;
  }
}
