import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioRepository from '../typeorm/repositories/ProntuarioRepository';

interface IRequest {
  idProntuario: number;
}

export default class DeleteProntuarioService {
  public async execute({ idProntuario }: IRequest): Promise<void> {
    const prontuarioRepository = getCustomRepository(ProntuarioRepository);
    const prontuario = await prontuarioRepository.findById(idProntuario);

    if (!prontuario) {
      throw new AppError('Prontuário not found.');
    }

    await prontuarioRepository.remove(prontuario);
  }
}
