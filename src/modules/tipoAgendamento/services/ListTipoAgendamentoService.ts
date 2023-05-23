import { getCustomRepository } from 'typeorm';
import TipoAgendamento from '../typeorm/entities/TipoAgendamento';
import TipoAgendamentoRepository from '../typeorm/repositories/TipoAgendamentoRepository';

export default class ListTipoAgendamentoService {
  public async execute(): Promise<TipoAgendamento[]> {
    const tipoAgendamentoRepository = getCustomRepository(TipoAgendamentoRepository);
    const tipoAgendamentos = await tipoAgendamentoRepository.find();

    return tipoAgendamentos;
  }
}
