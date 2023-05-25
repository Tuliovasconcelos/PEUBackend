import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import SolicitacaoItem from '../typeorm/entities/SolicitacaoItem';
import SolicitacaoItemRepository from '../typeorm/repositories/SolicitacaoItemRepository';

interface IRequest {
  idSolicitacaoItem: number;
  descricao: string;
  status: 'ativo' | 'inativo';
}

export default class UpdateSolicitacaoItemService {
  public async execute({ idSolicitacaoItem, descricao, status }: IRequest): Promise<SolicitacaoItem> {
    const solicitacaoItemRepository = getCustomRepository(SolicitacaoItemRepository);
    const solicitacaoItem = await solicitacaoItemRepository.findByIdItemSolicitacao(idSolicitacaoItem);

    if (!solicitacaoItem) {
      throw new AppError('item de solicitação não encontrado.');
    }

    solicitacaoItem.descricao = descricao;
    solicitacaoItem.status = status;
    solicitacaoItem.dataAlteracao = new Date();

    await solicitacaoItemRepository.save(solicitacaoItem);

    return solicitacaoItem;
  }
}
