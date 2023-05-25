import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import SolicitacaoItemRepository from '../typeorm/repositories/SolicitacaoItemRepository';

interface IRequest {
  idSolicitacaoItem: number;
}

export default class DeleteSolicitacaoItemService {
  public async execute({ idSolicitacaoItem }: IRequest): Promise<void> {
    const solicitacaoItemRepository = getCustomRepository(SolicitacaoItemRepository);
    const solicitacaoItem = await solicitacaoItemRepository.findByidSolicitacaoItem(idSolicitacaoItem);

    if (!solicitacaoItem) {
      throw new AppError('Item não encontrado.');
    }

    await solicitacaoItemRepository.remove(solicitacaoItem);
  }
}
