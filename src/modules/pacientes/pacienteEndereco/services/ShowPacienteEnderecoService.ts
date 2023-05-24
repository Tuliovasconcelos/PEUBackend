import { getCustomRepository } from 'typeorm';
import PacienteEndereco from '../typeorm/entities/PacienteEndereco';
import PacienteEnderecoRepository from '../typeorm/repositories/PacienteEnderecoRepository';

interface IRequest {
  idPacienteEndereco: number;
}

export default class ShowPacienteEnderecoService {
  public async execute({ idPacienteEndereco }: IRequest): Promise<PacienteEndereco | null> {
    const pacienteEnderecoRepository = getCustomRepository(
      PacienteEnderecoRepository
    );

    const pacienteEndereco = await pacienteEnderecoRepository.findById(idPacienteEndereco);

    return pacienteEndereco;
  }
}
