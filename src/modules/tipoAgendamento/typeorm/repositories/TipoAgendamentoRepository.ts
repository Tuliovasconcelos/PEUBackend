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

  public async findById(id: number): Promise<TipoAgendamento | null> {
    const tipoAgendamento = await this.findOne({
      where: {
        idTipoAgendamento: id,
      },
    });

    return tipoAgendamento || null;
  }
}
