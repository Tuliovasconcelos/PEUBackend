import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AtendimentoProcedimento from '../typeorm/entities/AtendimentoProcedimento';
import AtendimentoProcedimentoRepository from '../typeorm/repositories/AtendimentoProcedimentoRepository';

interface IRequest {
  idAtendimentoProcedimento: number;
}

export default class ShowAtendimentoProcedimentoService {
  public async execute({ idAtendimentoProcedimento }: IRequest): Promise<AtendimentoProcedimento | null> {
    const atendimentoProcedimentoRepository = getCustomRepository(AtendimentoProcedimentoRepository);

    const atendimentoProcedimento = await atendimentoProcedimentoRepository.findByIdAtendimentoProcedimento(idAtendimentoProcedimento);

    if (!atendimentoProcedimento) {
      throw new AppError('AtendimentoProcedimento not found.');
    }

    return atendimentoProcedimento;
  }
}
