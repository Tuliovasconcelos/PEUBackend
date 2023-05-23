import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AtendimentoRepository from '../typeorm/repositories/AtendimentoRepository';

interface IRequest {
  idAtendimento: number;
}

export default class DeleteAtendimentoService {
  public async execute({ idAtendimento }: IRequest): Promise<void> {
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);
    const atendimento = await atendimentoRepository.findById(idAtendimento);

    if (!atendimento) {
      throw new AppError('Atendimento not found');
    }

    await atendimentoRepository.remove(atendimento);
  }
}
