import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteContatoRepository from '../typeorm/repositories/PacienteContatoRepository';

interface IRequest {
  idContato: number;
}

export default class DeletePacienteContatoService {
  public async execute({ idContato }: IRequest): Promise<void> {
    const pacienteContatoRepository = getCustomRepository(PacienteContatoRepository);

    const PacienteContato = await pacienteContatoRepository.findById(idContato);

    if (!PacienteContato) {
      throw new AppError('PacienteContato not found.');
    }

    await pacienteContatoRepository.remove(PacienteContato);
  }
}

