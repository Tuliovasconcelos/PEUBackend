import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteRepository from '../typeorm/repositories/PacienteRepository';

interface IRequest {
  idPaciente: number;
}

export default class DeletePacienteService {
  public async execute({ idPaciente }: IRequest): Promise<void> {
    const pacientesRepository = getCustomRepository(PacienteRepository);

    const paciente = await pacientesRepository.findById(idPaciente);

    if (!paciente) {
      throw new AppError('Paciente not found.');
    }

    await pacientesRepository.delete(idPaciente);
  }
}
