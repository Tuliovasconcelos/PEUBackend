import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteContatoRepository from '../typeorm/repositories/PacienteContatoRepository';

interface IRequest {
  idPacienteContato: number;
}

export default class DeletePacienteContatoService {
  public async execute({ idPacienteContato }: IRequest): Promise<void> {
    const pacienteContatoRepository = getCustomRepository(PacienteContatoRepository);

    const PacienteContato = await pacienteContatoRepository.findById(idPacienteContato);

    if (!PacienteContato) {
      throw new AppError('PacienteContato not found.');
    }

    await pacienteContatoRepository.remove(PacienteContato);
  }
}

