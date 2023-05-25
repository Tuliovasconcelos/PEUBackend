import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import MedicoClinicaRepository from '../typeorm/repositories/MedicoClinicaRepository';

interface IRequest {
  idMedicoClinica: number;
}

export default class DeleteMedicoClinicaService {
  public async execute({ idMedicoClinica }: IRequest): Promise<void> {
    const medicoClinicaRepository = getCustomRepository(MedicoClinicaRepository);
    const medicoClinica = await medicoClinicaRepository.findByIdMedicoClinica(idMedicoClinica);

    if (!medicoClinica) {
      throw new AppError('MedicoClinica not found');
    }

    await medicoClinicaRepository.remove(medicoClinica);
  }
}
