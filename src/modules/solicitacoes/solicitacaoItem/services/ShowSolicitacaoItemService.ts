import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import SolicitacaoItem from '../typeorm/entities/SolicitacaoItem';
import SolicitacaoItemRepository from '../typeorm/repositories/SolicitacaoItemRepository';

interface IRequest {
  idSolicitacaoItem: number;
}

export default class ShowSolicitacaoItemService {
  public async execute({ idSolicitacaoItem }: IRequest): Promise<SolicitacaoItem | null> {
    const solicitacaoItemRepository = getCustomRepository(SolicitacaoItemRepository);
    const solicitacaoItem = await solicitacaoItemRepository.findByidSolicitacaoItem(idSolicitacaoItem);

    if (!solicitacaoItem) {
      throw new AppError('Item não encontrado.');
    }

    return solicitacaoItem;
  }
}
