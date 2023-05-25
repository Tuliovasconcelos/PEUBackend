import { getCustomRepository } from 'typeorm';
import Agendamento from '../typeorm/entities/Agendamento';
import AgendamentoRepository from '../typeorm/repositories/AgendamentoRepository';

export default class ListAgendamentoService {
  public async execute(): Promise<Agendamento[]> {
    const agendamentoRepository = getCustomRepository(AgendamentoRepository);

    const agendamentos = await agendamentoRepository.find();

    return agendamentos;
  }
}
