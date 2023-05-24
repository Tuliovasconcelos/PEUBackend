import { EntityRepository, Repository } from 'typeorm';
import AtendimentoProcedimento from '../entities/AtendimentoProcedimento';

@EntityRepository(AtendimentoProcedimento)
export default class AtendimentoProcedimentoRepository extends Repository<AtendimentoProcedimento> {
  public async findByIdAtendimentoProcedimento(idAtendimentoProcedimento: number): Promise<AtendimentoProcedimento | null> {
    return this.findOne({
      where: {
        idAtendimentoProcedimento: idAtendimentoProcedimento,
      },
    });
  }

  public async findByidAtendimento(idAtendimento: number): Promise<AtendimentoProcedimento[]> {
    return this.find({
      where: {
        atendimento: { idAtendimento: idAtendimento },
      },
    });
  }

  public async findByidProcedimento(idProcedimento: number): Promise<AtendimentoProcedimento[]> {
    return this.find({
      where: {
        procedimento: { idProcedimento: idProcedimento },
      },
    });
  }
}
