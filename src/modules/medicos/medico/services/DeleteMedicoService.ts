import { getCustomRepository } from 'typeorm';
import MedicoRepository from '../typeorm/repositories/MedicoRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idMedico: number;
}

export default class DeleteMedicoService {
  public async execute({ idMedico }: IRequest): Promise<void> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    const medico = await medicoRepository.findById(idMedico);

    if (!medico) {
      throw new AppError('Clinica not found.');
    }


    await medicoRepository.delete(idMedico);
  }
}

