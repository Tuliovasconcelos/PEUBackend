import { getCustomRepository } from 'typeorm';
import AtendimentoProcedimento from '../typeorm/entities/AtendimentoProcedimento';
import AtendimentoProcedimentoRepository from '../typeorm/repositories/AtendimentoProcedimentoRepository';

export default class ListAtendimentoProcedimentoService {
  public async execute(): Promise<AtendimentoProcedimento[]> {
    const atendimentoProcedimentoRepository = getCustomRepository(AtendimentoProcedimentoRepository);

    const atendimentoProcedimentos = await atendimentoProcedimentoRepository.find();

    return atendimentoProcedimentos;
  }
}
