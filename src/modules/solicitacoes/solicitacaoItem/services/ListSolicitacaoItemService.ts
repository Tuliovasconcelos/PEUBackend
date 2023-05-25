import { getCustomRepository } from 'typeorm';
import SolicitacaoItem from '../typeorm/entities/SolicitacaoItem';
import SolicitacaoItemRepository from '../typeorm/repositories/SolicitacaoItemRepository';

export default class ListSolicitacaoItemService {
  public async execute(): Promise<SolicitacaoItem[]> {
    const solicitacaoItemRepository = getCustomRepository(SolicitacaoItemRepository);
    const solicitacaoItems = await solicitacaoItemRepository.find();

    return solicitacaoItems;
  }
}
