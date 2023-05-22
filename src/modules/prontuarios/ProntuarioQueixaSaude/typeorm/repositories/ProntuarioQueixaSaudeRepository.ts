import { EntityRepository, Repository } from 'typeorm';
import ProntuarioQueixaSaude from '../entities/ProntuarioQueixaSaude';

@EntityRepository(ProntuarioQueixaSaude)
export default class ProntuarioQueixaSaudeRepository extends Repository<ProntuarioQueixaSaude> {
  public async findByProntuarioId(prontuarioId: number): Promise<ProntuarioQueixaSaude[]> {
    const queixasSaude = await this.find({
      where: {
        idProntuario: prontuarioId,
      },
    });

    return queixasSaude;
  }

  public async findByStatus(status: 'ativo' | 'inativo'): Promise<ProntuarioQueixaSaude[]> {
    const queixasSaude = await this.find({
      where: {
        status,
      },
    });

    return queixasSaude;
  }

}
