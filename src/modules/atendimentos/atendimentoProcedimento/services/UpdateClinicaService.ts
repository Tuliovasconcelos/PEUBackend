import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AtendimentoProcedimento from '../typeorm/entities/AtendimentoProcedimento';
import AtendimentoProcedimentoRepository from '../typeorm/repositories/AtendimentoProcedimentoRepository';

interface IRequest {
  idAtendimentoProcedimento: number;
  status: 'ativo' | 'inativo';
}

export default class UpdateAtendimentoProcedimentoService {
  public async execute({ idAtendimentoProcedimento, status }: IRequest): Promise<AtendimentoProcedimento> {
    const atendimentoProcedimentoRepository = getCustomRepository(AtendimentoProcedimentoRepository);

    const atendimentoProcedimento = await atendimentoProcedimentoRepository.findByIdAtendimentoProcedimento(
      idAtendimentoProcedimento
    );

    if (!atendimentoProcedimento) {
      throw new AppError('AtendimentoProcedimento not found.');
    }

    atendimentoProcedimento.status = status;
    atendimentoProcedimento.dataAlteracao = new Date();

    await atendimentoProcedimentoRepository.save(atendimentoProcedimento);

    return atendimentoProcedimento;
  }
}
