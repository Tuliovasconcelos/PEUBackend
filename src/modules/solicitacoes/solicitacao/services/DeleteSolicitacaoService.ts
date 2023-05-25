import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import SolicitacaoRepository from '../typeorm/repositories/SolicitacaoRepository';

interface IRequest {
  idSolicitacao: number;
}

export default class DeleteSolicitacaoService {
  public async execute({ idSolicitacao }: IRequest): Promise<void> {
    const solicitacaoRepository = getCustomRepository(SolicitacaoRepository);

    const solicitacao = await solicitacaoRepository.findByIdSolicitacao(idSolicitacao);

    if (!solicitacao) {
      throw new AppError('Solicitacao not found');
    }

    await solicitacaoRepository.remove(solicitacao);
  }
}
