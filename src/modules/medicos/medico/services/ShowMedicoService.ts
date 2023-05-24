import { getCustomRepository } from 'typeorm';
import Medico from '../typeorm/entities/Medico';
import AppError from '@shared/errors/AppError';
import MedicoRepository from '../typeorm/repositories/MedicoRepository';

interface IRequest {
  idMedico: number;
}

export default class ShowMedicoService {
  public async execute(idMedico: IRequest): Promise<Medico | null | undefined> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    const medico = await medicoRepository.findById(idMedico.idMedico);

    if (!medico) {
      throw new AppError('Clinica not found.');
    }


    return medico;
  }
}
