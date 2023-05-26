import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AtendimentoProcedimento from '../typeorm/entities/AtendimentoProcedimento';
import AtendimentoProcedimentoRepository from '../typeorm/repositories/AtendimentoProcedimentoRepository';

interface IRequest {
  idAtendimentoProcedimento: number;
  idAtendimento: number;
  idProcedimento: number;
  status: 'A' | 'I';
}

export default class UpdateAtendimentoProcedimentoService {
  public async execute({ idAtendimentoProcedimento, ...data }: IRequest): Promise<AtendimentoProcedimento> {
    const atendimentoProcedimentoRepository = getCustomRepository(AtendimentoProcedimentoRepository);

    const atendimentoProcedimento = await atendimentoProcedimentoRepository.findByIdAtendimentoProcedimento(
      idAtendimentoProcedimento
    );

    if (!atendimentoProcedimento) {
      throw new AppError('AtendimentoProcedimento not found.');
    }

    await atendimentoProcedimentoRepository.save(data);

    return atendimentoProcedimento;
  }
}
