import { getCustomRepository } from 'typeorm';
import AgendamentoTipo from '../typeorm/entities/agendamentoTipo';
import AgendamentoTipoRepository from '../typeorm/repositories/AgendamentoTipoRepository';

export default class ListAgendamentoTipoService {
  public async execute(): Promise<AgendamentoTipo[]> {
    const agendamentoTipoRepository = getCustomRepository(AgendamentoTipoRepository);
    const agendamentoTipos = await agendamentoTipoRepository.find();

    return agendamentoTipos;
  }
}
