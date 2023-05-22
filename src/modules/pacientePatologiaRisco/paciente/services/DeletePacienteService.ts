import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteRepository from '../typeorm/repositories/PacienteRepository';

interface IRequest {
  id: number;
}

export default class DeletePacienteService {
  public async execute({ id }: IRequest): Promise<void> {
    const pacientesRepository = getCustomRepository(PacienteRepository);

    const paciente = await pacientesRepository.findById(id);

    if (!paciente) {
      throw new AppError('Paciente not found.', 404);
    }

    await pacientesRepository.delete(id);
  }
}
