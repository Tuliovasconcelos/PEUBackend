import { EntityRepository, Repository } from 'typeorm';
import Atendimento from '../entities/Atendimento';

@EntityRepository(Atendimento)
export default class AtendimentoRepository extends Repository<Atendimento> {
  public async findById(idAtendimento: number): Promise<Atendimento | null> {
    const atendimento = await this.findOne({
      where: {
        idAtendimento: idAtendimento,
      },
    });

    return atendimento || null;
  }

}
