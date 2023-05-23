import { EntityRepository, Repository } from 'typeorm';
import ProntuarioQueixaSaude from '../entities/ProntuarioQueixaSaude';

@EntityRepository(ProntuarioQueixaSaude)
export default class ProntuarioQueixaSaudeRepository extends Repository<ProntuarioQueixaSaude> {

  public async findById(idQueixaSaude: number): Promise<ProntuarioQueixaSaude | null> {
    const queixaSaude = await this.findOne({
      where: {
        idQueixaSaude: idQueixaSaude,
      },
    });

    return queixaSaude || null;
  }

  public async findByIdProntuario(idProntuario: number): Promise<ProntuarioQueixaSaude[]> {
    const queixaSaude = await this.find({
      where: {
        idProntuario: idProntuario,
      },
    });

    return queixaSaude;
  }

}
