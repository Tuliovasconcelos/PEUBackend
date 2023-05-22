import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Prontuario from '../typeorm/entities/Prontuario';
import ProntuarioRepository from '../typeorm/repositories/ProntuarioRepository';

interface IRequest {
  idProntuario: number;
}

export default class ShowProntuarioService {
  public async execute({ idProntuario }: IRequest): Promise<Prontuario | null> {
    const prontuarioRepository = getCustomRepository(ProntuarioRepository);
    const prontuario = await prontuarioRepository.findById(idProntuario);

    if (!prontuario) {
      throw new AppError('Prontuário not found.');
    }

    return prontuario;
  }
}
