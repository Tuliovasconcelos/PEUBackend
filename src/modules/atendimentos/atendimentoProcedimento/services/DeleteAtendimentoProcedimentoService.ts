import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AtendimentoProcedimentoRepository from '../typeorm/repositories/AtendimentoProcedimentoRepository';

interface IRequest {
  idAtendimentoProcedimento: number;
}

export default class DeleteAtendimentoProcedimentoService {
  public async execute({ idAtendimentoProcedimento }: IRequest): Promise<void> {
    const atendimentoProcedimentoRepository = getCustomRepository(AtendimentoProcedimentoRepository);

    const atendimentoProcedimento = await atendimentoProcedimentoRepository.findByIdAtendimentoProcedimento(idAtendimentoProcedimento);

    if (!atendimentoProcedimento) {
      throw new AppError('AtendimentoProcedimento not found.');
    }

    await atendimentoProcedimentoRepository.remove(atendimentoProcedimento);
  }
}
