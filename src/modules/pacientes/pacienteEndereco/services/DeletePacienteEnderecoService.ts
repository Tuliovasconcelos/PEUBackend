import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteEnderecoRepository from '../typeorm/repositories/PacienteEnderecoRepository';

interface IRequest {
  idPacienteEndereco: number;
}

export default class DeletePacienteEnderecoService {
  public async execute({ idPacienteEndereco }: IRequest): Promise<void> {
    const pacienteEnderecoRepository = getCustomRepository(
      PacienteEnderecoRepository
    );

    const PacienteEndereco = await pacienteEnderecoRepository.findById(idPacienteEndereco);

    if (!PacienteEndereco) {
      throw new AppError('PacienteEndereco not found.');
    }

    await pacienteEnderecoRepository.remove(PacienteEndereco);
  }
}

