import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Solicitacao from '../typeorm/entities/Solicitacao';
import SolicitacaoRepository from '../typeorm/repositories/SolicitacaoRepository';

interface IRequest {
  idSolicitacao: number;
  idPaciente?: number;
  idMedico?: number;
  idClinica?: number;
  dataSolicitacao?: Date;
  status?: 'A' | 'I';
}

export default class UpdateSolicitacaoService {
  public async execute({
    idSolicitacao,
    idPaciente,
    idMedico,
    idClinica,
    dataSolicitacao,
    status,
  }: IRequest): Promise<Solicitacao> {
    const solicitacaoRepository = getCustomRepository(SolicitacaoRepository);

    const solicitacao = await solicitacaoRepository.findByIdSolicitacao(idSolicitacao);

    if (!solicitacao) {
      throw new AppError('Solicitacao not found');
    }

    if (idPaciente) {
      solicitacao.paciente.idPaciente = idPaciente;
    }

    if (idMedico) {
      solicitacao.medico.idMedico = idMedico;
    }

    if (idClinica) {
      solicitacao.clinica.idClinica = idClinica;
    }

    if (dataSolicitacao) {
      solicitacao.dataSolicitacao = dataSolicitacao;
    }

    if (status) {
      solicitacao.status = status;
    }

    await solicitacaoRepository.save(solicitacao);

    return solicitacao;
  }
}
