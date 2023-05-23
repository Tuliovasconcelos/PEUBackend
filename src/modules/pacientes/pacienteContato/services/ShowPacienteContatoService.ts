import { getCustomRepository } from 'typeorm';
import PacienteContato from '../typeorm/entities/PacienteContato';
import PacienteContatoRepository from '../typeorm/repositories/PacienteContatoRepository';

interface IRequest {
  idPacienteContato: number;
}

export default class ShowPacienteContatoService {
  public async execute({ idPacienteContato }: IRequest): Promise<PacienteContato | undefined> {
    const pacienteContatoRepository = getCustomRepository(
      PacienteContatoRepository
    );
    const PacienteContato = await pacienteContatoRepository.findById(idPacienteContato);

    return PacienteContato || undefined;
  }
}






