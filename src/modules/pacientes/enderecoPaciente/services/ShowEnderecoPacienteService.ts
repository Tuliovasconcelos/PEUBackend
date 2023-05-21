import { getCustomRepository } from 'typeorm';
import EnderecoPaciente from '../typeorm/entities/EnderecoPaciente';
import EnderecoPacienteRepository from '../typeorm/repositories/EnderecoPacienteRepository';

interface IRequest {
  id: number;
}

export default class ShowEnderecoPacienteService {
  public async execute({ id }: IRequest): Promise<EnderecoPaciente | undefined> {
    const enderecoPacienteRepository = getCustomRepository(
      EnderecoPacienteRepository
    );

    const enderecoPaciente = await enderecoPacienteRepository.findById(id);

    return enderecoPaciente;
  }
}
