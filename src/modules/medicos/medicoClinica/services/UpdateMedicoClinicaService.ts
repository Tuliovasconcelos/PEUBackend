import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import MedicoClinica from '../typeorm/entities/MedicoClinica';
import MedicoClinicaRepository from '../typeorm/repositories/MedicoClinicaRepository';

interface IRequest {
  idMedicoClinica: number;
  status: 'ativo' | 'inativo';
}

export default class UpdateMedicoClinicaService {
  public async execute({ idMedicoClinica, status }: IRequest): Promise<MedicoClinica> {
    const medicoClinicaRepository = getCustomRepository(MedicoClinicaRepository);
    const medicoClinica = await medicoClinicaRepository.findByIdMedicoClinica(idMedicoClinica);

    if (!medicoClinica) {
      throw new AppError('MedicoClinica not found');
    }

    medicoClinica.status = status;

    await medicoClinicaRepository.save(medicoClinica);

    return medicoClinica;
  }
}
