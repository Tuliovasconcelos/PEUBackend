import { getCustomRepository } from 'typeorm';
import ContatoPaciente from '../typeorm/entities/ContatoPaciente';
import ContatoPacienteRepository from '../typeorm/repositories/ContatoPacienteRepository';

interface IRequest {
  id: number;
}

export default class ShowContatoPacienteService {
  public async execute({ id }: IRequest): Promise<ContatoPaciente | undefined> {
    const contatoPacienteRepository = getCustomRepository(
      ContatoPacienteRepository
    );

    const contatoPaciente = await contatoPacienteRepository.findById(id);

    return contatoPaciente;
  }
}
