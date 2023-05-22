import { getCustomRepository } from 'typeorm';
import PacienteEndereco from '../typeorm/entities/PacienteEndereco';
import PacienteEnderecoRepository from '../typeorm/repositories/PacienteEnderecoRepository';

interface IRequest {
  idEndereco: number;
}

export default class ShowPacienteEnderecoService {
  public async execute({ idEndereco }: IRequest): Promise<PacienteEndereco | null> {
    const pacienteEnderecoRepository = getCustomRepository(
      PacienteEnderecoRepository
    );

    const pacienteEndereco = await pacienteEnderecoRepository.findById(idEndereco);

    return pacienteEndereco;
  }
}
