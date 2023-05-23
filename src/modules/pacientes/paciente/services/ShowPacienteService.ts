import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Paciente from '../typeorm/entities/Paciente';
import PacienteRepository from '../typeorm/repositories/PacienteRepository';

interface IRequest {
  idPaciente: number;
}

export default class ShowPacienteService {
  public async execute({ idPaciente }: IRequest): Promise<Paciente> {
    const pacientesRepository = getCustomRepository(PacienteRepository);

    const paciente = await pacientesRepository.findById(idPaciente);

    if (!paciente) {
      throw new AppError('Paciente not found.');
    }

    return paciente;
  }
}

