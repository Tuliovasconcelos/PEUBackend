import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AtendimentoProcedimento from '../typeorm/entities/AtendimentoProcedimento';
import AtendimentoProcedimentoRepository from '../typeorm/repositories/AtendimentoProcedimentoRepository';

interface IRequest {
  idAtendimento: number;
  idProcedimento: number;
  status: 'ativo' | 'inativo';
}

export default class CreateAtendimentoProcedimentoService {
  public async execute({ idAtendimento, idProcedimento, status }: IRequest): Promise<AtendimentoProcedimento> {
    const atendimentoProcedimentoRepository = getCustomRepository(AtendimentoProcedimentoRepository);

    const atendimentoProcedimento = atendimentoProcedimentoRepository.create({
      atendimento: { idAtendimento: idAtendimento },
      procedimento: { idProcedimento: idProcedimento },
      status,
      dataAlteracao: new Date(),
    });

    await atendimentoProcedimentoRepository.save(atendimentoProcedimento);

    return atendimentoProcedimento;
  }
}
