import { getCustomRepository } from 'typeorm';
import Atendimento from '../typeorm/entities/Atendimento';
import AtendimentoRepository from '../typeorm/repositories/AtendimentoRepository';

export default class ListAtendimentoService {
  public async execute(): Promise<Atendimento[]> {
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);
    const atendimentos = await atendimentoRepository.find();
    return atendimentos;
  }
}
