import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import MedicoClinica from '../typeorm/entities/MedicoClinica';
import MedicoClinicaRepository from '../typeorm/repositories/MedicoClinicaRepository';

interface IRequest {
  idMedico: number;
  idClinica: number;
  status: 'ativo' | 'inativo';
}

export default class CreateMedicoClinicaService {
  public async execute({ idMedico, idClinica, status }: IRequest): Promise<MedicoClinica> {
    const medicoClinicaRepository = getCustomRepository(MedicoClinicaRepository);
    const medicoClinicaExists = await medicoClinicaRepository.findByIdMedicoAndIdClinica(idMedico, idClinica);

    if (medicoClinicaExists) {
      throw new AppError('This relationship between Medico and Clinica already exists');
    }

    const medicoClinica = medicoClinicaRepository.create({
      medico: { idMedico: idMedico },
      clinica: { idClinica: idClinica },
      status,
    });

    await medicoClinicaRepository.save(medicoClinica);

    return medicoClinica;
  }
}
