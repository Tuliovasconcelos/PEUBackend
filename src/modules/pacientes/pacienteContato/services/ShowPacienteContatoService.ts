import { getCustomRepository } from 'typeorm';
import PacienteContato from '../typeorm/entities/PacienteContato';
import PacienteContatoRepository from '../typeorm/repositories/PacienteContatoRepository';

interface IRequest {
  id: number;
}

export default class ShowPacienteContatoService {
  public async execute({ id }: IRequest): Promise<PacienteContato | undefined> {
    const pacienteContatoRepository = getCustomRepository(
      PacienteContatoRepository
    );
    const PacienteContato = await pacienteContatoRepository.findById(id);

    return PacienteContato || undefined;
  }
}






