import { getCustomRepository } from 'typeorm';
import PacienteContato from '../typeorm/entities/PacienteContato';
import PacienteContatoRepository from '../typeorm/repositories/PacienteContatoRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idPacienteContato: number;
}

export default class ShowPacienteContatoService {
  public async execute({ idPacienteContato }: IRequest): Promise<PacienteContato | undefined> {
    const pacienteContatoRepository = getCustomRepository(
      PacienteContatoRepository
    );
    const PacienteContato = await pacienteContatoRepository.findById(idPacienteContato);

    if (!PacienteContato) {
      throw new AppError('PacienteContato not found.');
    }

    return PacienteContato || undefined;
  }
}






