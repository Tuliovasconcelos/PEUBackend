import { EntityRepository, Repository } from 'typeorm';
import TipoAgendamento from '../entities/TipoAgendamento';

@EntityRepository(TipoAgendamento)
export default class TipoAgendamentoRepository extends Repository<TipoAgendamento> {
  public async findByName(nome: string): Promise<TipoAgendamento | null> {
    const tipoAgendamento = await this.findOne({
      where: {
        nome,
      },
    });

    return tipoAgendamento || null;
  }

  public async findById(idTipoAgendamento: number): Promise<TipoAgendamento | null> {
    const tipoAgendamento = await this.findOne({
      where: {
        idTipoAgendamento: idTipoAgendamento,
      },
    });

    return tipoAgendamento || null;
  }
}
