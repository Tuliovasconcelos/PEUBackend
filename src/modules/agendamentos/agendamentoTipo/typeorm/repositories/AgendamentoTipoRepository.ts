import { EntityRepository, Repository } from 'typeorm';
import AgendamentoTipo from '../entities/agendamentoTipo';

@EntityRepository(AgendamentoTipo)
export default class AgendamentoTipoRepository extends Repository<AgendamentoTipo> {
  public async findByName(nome: string): Promise<AgendamentoTipo | null> {
    const agendamentoTipo = await this.findOne({
      where: {
        nome,
      },
    });

    return agendamentoTipo || null;
  }

  public async findById(id: number): Promise<AgendamentoTipo | null> {
    const agendamentoTipo = await this.findOne({
      where: {
        idAgendamentoTipo: id,
      },
    });

    return agendamentoTipo || null;
  }
}
