import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ContatoPacienteRepository from '../typeorm/repositories/ContatoPacienteRepository';

interface IRequest {
  id: number;
}

export default class DeleteContatoPacienteService {
  public async execute({ id }: IRequest): Promise<void> {
    const contatoPacienteRepository = getCustomRepository(ContatoPacienteRepository);

    const contatoPaciente = await contatoPacienteRepository.findOne(id);

    if (!contatoPaciente) {
      throw new AppError('ContatoPaciente not found.');
    }

    await contatoPacienteRepository.remove(contatoPaciente);
  }
}

