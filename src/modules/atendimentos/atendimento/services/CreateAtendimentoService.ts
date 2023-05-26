import { getCustomRepository } from 'typeorm';
import Atendimento from '../typeorm/entities/Atendimento';
import AtendimentoRepository from '../typeorm/repositories/AtendimentoRepository';

interface IRequest {
  idPaciente: number;
  idMedico: number;
  idProntuario: number;
  idClinica: number;
  idTipoAgendamento: number;
  idPrograma: number;
  dataAtendimento: Date;
  horaAtendimento: string;
  conclusao: string;
  status: 'A' | 'I';
}

export default class CreateAtendimentoService {
  public async execute(data: IRequest): Promise<Atendimento> {
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);

    const atendimento = atendimentoRepository.create(data);

    await atendimentoRepository.save(atendimento);

    return atendimento;
  }
}
