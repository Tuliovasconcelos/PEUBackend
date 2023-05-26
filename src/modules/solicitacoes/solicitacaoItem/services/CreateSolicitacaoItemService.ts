import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import SolicitacaoItem from '../typeorm/entities/SolicitacaoItem';
import SolicitacaoItemRepository from '../typeorm/repositories/SolicitacaoItemRepository';

interface IRequest {
  idSolicitacao: number;
  descricao: string;
  status: 'A' | 'I';
}

export default class CreateSolicitacaoItemService {
  public async execute({ idSolicitacao, descricao, status }: IRequest): Promise<SolicitacaoItem> {
    const solicitacaoItemRepository = getCustomRepository(SolicitacaoItemRepository);
    // Verifica se a solicitação já existe
    const solicitacaoItemExists = await solicitacaoItemRepository.findByIdSolicitacao(idSolicitacao);
    if (!solicitacaoItemExists) {
      throw new AppError('Solicitação não encontrada.');
    }

    const solicitacaoItem = solicitacaoItemRepository.create({
      solicitacao: { idSolicitacao },
      descricao,
      status,
      dataAlteracao: new Date(),
    });

    await solicitacaoItemRepository.save(solicitacaoItem);

    return solicitacaoItem;
  }
}
