import { getCustomRepository } from 'typeorm';
import EnderecoPaciente from '../typeorm/entities/EnderecoPaciente';
import EnderecoPacienteRepository from '../typeorm/repositories/EnderecoPacienteRepository';

export default class ListEnderecoPacienteService {
  public async execute(): Promise<EnderecoPaciente[]> {
    const enderecoPacienteRepository = getCustomRepository(
      EnderecoPacienteRepository
    );

    const enderecosPaciente = await enderecoPacienteRepository.find();

    return enderecosPaciente;
  }
}

