import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Atendimento from '../typeorm/entities/Atendimento';
import AtendimentoRepository from '../typeorm/repositories/AtendimentoRepository';

interface IRequest {
  idAtendimento: number;
}

export default class ShowAtendimentoService {
  public async execute({ idAtendimento }: IRequest): Promise<Atendimento | null> {
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);
    const atendimento = await atendimentoRepository.findById(idAtendimento);

    if (!atendimento) {
      throw new AppError('Atendimento not found.');
    }

    return atendimento;
  }
}
