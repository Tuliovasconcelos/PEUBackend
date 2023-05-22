import { EntityRepository, Repository } from 'typeorm';
import ProntuarioQueixaSaude from '../entities/ProntuarioQueixaSaude';

@EntityRepository(ProntuarioQueixaSaude)
export default class ProntuarioQueixaSaudeRepository extends Repository<ProntuarioQueixaSaude> {
  public async findByName(nome: string): Promise<ProntuarioQueixaSaude | null> {
    const queixaSaude = await this.findOne({
      where: {
        nome,
      },
    });

    return queixaSaude || null;
  }

  public async findById(id: number): Promise<ProntuarioQueixaSaude | null> {
    const queixaSaude = await this.findOne({
      where: {
        idQueixaSaude: id,
      },
    });

    return queixaSaude || null;
  }
}
