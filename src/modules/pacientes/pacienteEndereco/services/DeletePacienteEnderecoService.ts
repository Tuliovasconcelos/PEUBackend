import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteEnderecoRepository from '../typeorm/repositories/PacienteEnderecoRepository';

interface IRequest {
  id: number;
}

export default class DeletePacienteEnderecoService {
  public async execute({ id }: IRequest): Promise<void> {
    const pacienteEnderecoRepository = getCustomRepository(
      PacienteEnderecoRepository
    );

    const PacienteEndereco = await pacienteEnderecoRepository.findById(id);

    if (!PacienteEndereco) {
      throw new AppError('PacienteEndereco not found.');
    }

    await pacienteEnderecoRepository.remove(PacienteEndereco);
  }
}

