import { EntityRepository, Repository } from 'typeorm';
import ProntuarioHistoricoSaude from '../entities/ProntuarioHistoricoSaude';

@EntityRepository(ProntuarioHistoricoSaude)
export default class ProntuarioHistoricoSaudeRepository extends Repository<ProntuarioHistoricoSaude> {
  public async findById(idProntuarioHistoricoSaude: number): Promise<ProntuarioHistoricoSaude | null> {
    const historico = await this.findOne({
      where: {
        idProntuarioHistoricoSaude: idProntuarioHistoricoSaude,
      },
    });

    return historico || null;
  }

  public async findAllByProntuario(prontuarioId: number): Promise<ProntuarioHistoricoSaude[]> {
    const historicos = await this.find({
      where: {
        idProntuario: prontuarioId,
      },
    });

    return historicos;
  }

  public async createHistorico(historico: ProntuarioHistoricoSaude): Promise<ProntuarioHistoricoSaude> {
    const novoHistorico = this.create(historico);
    await this.save(novoHistorico);
    return novoHistorico;
  }

  public async updateHistorico(historico: ProntuarioHistoricoSaude): Promise<ProntuarioHistoricoSaude> {
    const historicoAtualizado = await this.save(historico);
    return historicoAtualizado;
  }

  public async deleteHistorico(id: number): Promise<void> {
    await this.delete(id);
  }
}
