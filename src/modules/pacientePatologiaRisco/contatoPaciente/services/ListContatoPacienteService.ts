import { getCustomRepository } from 'typeorm';
import ContatoPaciente from '../typeorm/entities/ContatoPaciente';
import ContatoPacienteRepository from '../typeorm/repositories/ContatoPacienteRepository';

export default class ListContatoPacienteService {
  public async execute(): Promise<ContatoPaciente[]> {
    const contatoPacienteRepository = getCustomRepository(
      ContatoPacienteRepository
    );

    const contatosPaciente = await contatoPacienteRepository.find();

    return contatosPaciente;
  }
}
