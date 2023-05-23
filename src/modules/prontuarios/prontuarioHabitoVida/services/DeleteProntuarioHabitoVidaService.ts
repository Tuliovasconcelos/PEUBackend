import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioHabitoVidaRepository from '../typeorm/repositories/ProntuarioHabitoVidaRepository';

interface IRequest {
  idHabitoVida: number;
}

export default class DeleteProntuarioHabitoVidaService {
  public async execute({ idHabitoVida }: IRequest): Promise<void> {
    const prontuarioHabitoVidaRepository = getCustomRepository(ProntuarioHabitoVidaRepository);
    const prontuarioHabitoVida = await prontuarioHabitoVidaRepository.findById(idHabitoVida);

    if (!prontuarioHabitoVida) {
      throw new AppError('Queixa de saúde not found.');
    }

    await prontuarioHabitoVidaRepository.remove(prontuarioHabitoVida);
  }
}
