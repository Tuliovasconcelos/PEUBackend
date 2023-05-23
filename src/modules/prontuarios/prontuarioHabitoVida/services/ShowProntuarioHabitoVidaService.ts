import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioHabitoVida from '../typeorm/entities/ProntuarioHabitoVida';
import ProntuarioHabitoVidaRepository from '../typeorm/repositories/ProntuarioHabitoVidaRepository';

interface IRequest {
  idHabitoVida: number;
}

export default class ShowProntuarioHabitoVidaService {
  public async execute({ idHabitoVida }: IRequest): Promise<ProntuarioHabitoVida> {
    const prontuarioHabitoVidaRepository = getCustomRepository(ProntuarioHabitoVidaRepository);
    const prontuarioHabitoVida = await prontuarioHabitoVidaRepository.findById(idHabitoVida);

    if (!prontuarioHabitoVida) {
      throw new AppError('Queixa de saúde not found.');
    }

    return prontuarioHabitoVida;
  }
}
