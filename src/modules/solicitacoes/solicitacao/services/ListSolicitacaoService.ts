import { getCustomRepository } from 'typeorm';
import SolicitacaoRepository from '../typeorm/repositories/SolicitacaoRepository';
import Solicitacao from '../typeorm/entities/Solicitacao';

export default class ListSolicitacaoService {
  public async execute(): Promise<Solicitacao[]> {
    const solicitacaoRepository = getCustomRepository(SolicitacaoRepository);

    const solicitacoes = await solicitacaoRepository.find();

    return solicitacoes;
  }
}

