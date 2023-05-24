import { getCustomRepository } from 'typeorm';
import PacienteEndereco from '../typeorm/entities/PacienteEndereco';
import PacienteEnderecoRepository from '../typeorm/repositories/PacienteEnderecoRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idPacienteEndereco: number;
}

export default class ShowPacienteEnderecoService {
  public async execute({ idPacienteEndereco }: IRequest): Promise<PacienteEndereco | null> {
    const pacienteEnderecoRepository = getCustomRepository(
      PacienteEnderecoRepository
    );

    const pacienteEndereco = await pacienteEnderecoRepository.findById(idPacienteEndereco);

    if (!pacienteEndereco) {
      throw new AppError('PacienteEndereco is not found!')
    }

    return pacienteEndereco;
  }
}
