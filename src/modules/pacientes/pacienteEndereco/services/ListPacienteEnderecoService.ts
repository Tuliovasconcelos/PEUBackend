import { getCustomRepository } from 'typeorm';
import PacienteEndereco from '../typeorm/entities/PacienteEndereco';
import PacienteEnderecoRepository from '../typeorm/repositories/PacienteEnderecoRepository';

export default class ListPacienteEnderecoService {
  public async execute(): Promise<PacienteEndereco[]> {
    const pacienteEndereco = getCustomRepository(
      PacienteEnderecoRepository
    );

    const enderecosPaciente = await pacienteEndereco.find();

    return enderecosPaciente;
  }
}

