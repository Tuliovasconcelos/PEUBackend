import { EntityRepository, Repository } from 'typeorm';
import SolicitacaoItem from '../entities/SolicitacaoItem';

@EntityRepository(SolicitacaoItem)
export default class SolicitacaoItemRepository extends Repository<SolicitacaoItem> {
  public async findByidSolicitacaoItem(idSolicitacaoItem: number): Promise<SolicitacaoItem | null> {
    const solicitacaoItem = await this.findOne({ where: { idSolicitacaoItem: idSolicitacaoItem } });
    return solicitacaoItem || null;
  }

  public async findByIdSolicitacao(idSolicitacao: number): Promise<SolicitacaoItem[]> {
    const solicitacaoItems = await this.find({
      where: {
        solicitacao: { idSolicitacao },
      },
    });
    return solicitacaoItems;
  }
}
