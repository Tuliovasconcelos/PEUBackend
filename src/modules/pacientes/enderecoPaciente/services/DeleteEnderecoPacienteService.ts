import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import EnderecoPacienteRepository from '../typeorm/repositories/EnderecoPacienteRepository';

interface IRequest {
  id: number;
}

export default class DeleteEnderecoPacienteService {
  public async execute({ id }: IRequest): Promise<void> {
    const enderecoPacienteRepository = getCustomRepository(
      EnderecoPacienteRepository
    );

    const enderecoPaciente = await enderecoPacienteRepository.findById(id);

    if (!enderecoPaciente) {
      throw new AppError('EnderecoPaciente not found.');
    }

    await enderecoPacienteRepository.remove(enderecoPaciente);
  }
}

