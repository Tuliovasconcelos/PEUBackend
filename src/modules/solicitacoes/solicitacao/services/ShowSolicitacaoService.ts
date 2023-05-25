import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Solicitacao from '../typeorm/entities/Solicitacao';
import SolicitacaoRepository from '../typeorm/repositories/SolicitacaoRepository';

interface IRequest {
  idSolicitacao: number;
}

export default class ShowSolicitacaoService {
  public async execute({ idSolicitacao }: IRequest): Promise<Solicitacao> {
    const solicitacaoRepository = getCustomRepository(SolicitacaoRepository);

    const solicitacao = await solicitacaoRepository.findByIdSolicitacao(idSolicitacao);

    if (!solicitacao) {
      throw new AppError('Solicitacao not found');
    }

    return solicitacao;
  }
}
