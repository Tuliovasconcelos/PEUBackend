import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Solicitacao from '../typeorm/entities/Solicitacao';
import SolicitacaoRepository from '../typeorm/repositories/SolicitacaoRepository';

interface IRequest {
  idPaciente: number;
  idMedico: number;
  idClinica: number;
  dataSolicitacao: Date;
  status: 'ativo' | 'inativo';
}

export default class CreateSolicitacaoService {
  public async execute({
    idPaciente,
    idMedico,
    idClinica,
    dataSolicitacao,
    status,
  }: IRequest): Promise<Solicitacao> {
    const solicitacaoRepository = getCustomRepository(SolicitacaoRepository);

    const solicitacao = solicitacaoRepository.create({
      paciente: { idPaciente: idPaciente },
      medico: { idMedico: idMedico },
      clinica: { idClinica: idClinica },
      dataSolicitacao,
      status,
    });

    await solicitacaoRepository.save(solicitacao);

    return solicitacao;
  }
}
