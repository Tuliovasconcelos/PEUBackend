import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AgendamentoTipo from '../typeorm/entities/agendamentoTipo';
import AgendamentoTipoRepository from '../typeorm/repositories/AgendamentoTipoRepository';

interface IRequest {
  nome: string;
  status: 'A' | 'I';
}

export default class CreateAgendamentoTipoService {
  public async execute({ nome, status }: IRequest): Promise<AgendamentoTipo> {
    const agendamentoTipoRepository = getCustomRepository(AgendamentoTipoRepository);
    const agendamentoTipoExists = await agendamentoTipoRepository.findByName(nome);

    if (agendamentoTipoExists) {
      throw new AppError('There is already an AgendamentoTipo with this name');
    }

    const agendamentoTipo = agendamentoTipoRepository.create({
      nome,
      status,
      dataAlteracao: new Date(),
    });

    await agendamentoTipoRepository.save(agendamentoTipo);

    return agendamentoTipo;
  }
}
