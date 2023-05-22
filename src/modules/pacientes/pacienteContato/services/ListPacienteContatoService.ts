import { getCustomRepository } from 'typeorm';
import PacienteContato from '../typeorm/entities/PacienteContato';
import PacienteContatoRepository from '../typeorm/repositories/PacienteContatoRepository';

export default class ListPacienteContatoService {
  public async execute(): Promise<PacienteContato[]> {
    const pacienteContatoRepository = getCustomRepository(
      PacienteContatoRepository
    );

    const contatosPaciente = await pacienteContatoRepository.find();

    return contatosPaciente;
  }
}
