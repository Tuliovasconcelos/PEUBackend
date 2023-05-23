import { EntityRepository, Repository } from 'typeorm';
import Procedimento from '../entities/Procedimento';

@EntityRepository(Procedimento)
export default class ProcedimentoRepository extends Repository<Procedimento> {
  public async findByName(nome: string): Promise<Procedimento | null> {
    const procedimento = await this.findOne({
      where: {
        nome,
      },
    });

    return procedimento || null;
  }

  public async findById(idProcedimento: number): Promise<Procedimento | null> {
    const procedimento = await this.findOne({
      where: {
        idProcedimento: idProcedimento,
      },
    });

    return procedimento || null;
  }
}
