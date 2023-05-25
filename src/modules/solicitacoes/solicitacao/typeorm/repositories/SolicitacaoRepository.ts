import { EntityRepository, Repository } from 'typeorm';
import Solicitacao from '../entities/Solicitacao';

@EntityRepository(Solicitacao)
export default class SolicitacaoRepository extends Repository<Solicitacao> {

  public async findByIdSolicitacao(idSolicitacao: number): Promise<Solicitacao | null> {
    const prontuario = await this.findOne({ where: { idSolicitacao: idSolicitacao } });
    return prontuario || null;
  }


  public async findByIdPaciente(idPaciente: number): Promise<Solicitacao[]> {
    const solicitacoes = await this.find({
      where: {
        paciente: { idPaciente },
      },
    });
    return solicitacoes;
  }

  public async findByIdMedico(idMedico: number): Promise<Solicitacao[]> {
    const solicitacoes = await this.find({
      where: {
        medico: { idMedico },
      },
    });
    return solicitacoes;
  }

  public async findByIdPacienteAndIdMedico(idPaciente: number, idMedico: number): Promise<Solicitacao[]> {
    const solicitacoes = await this.find({
      where: {
        paciente: { idPaciente },
        medico: { idMedico },
      },
    });
    return solicitacoes;
  }

  public async findByIdPacienteAndIdClinica(idPaciente: number, idClinica: number): Promise<Solicitacao[]> {
    const solicitacoes = await this.find({
      where: {
        paciente: { idPaciente },
        clinica: { idClinica },
      },
    });
    return solicitacoes;
  }

  public async findByIdClinica(idClinica: number): Promise<Solicitacao[]> {
    const solicitacoes = await this.find({
      where: {
        clinica: { idClinica },
      },
    });
    return solicitacoes;
  }

  public async findByIdClinicaAndIdMedico(idClinica: number, idMedico: number): Promise<Solicitacao[]> {
    const solicitacoes = await this.find({
      where: {
        clinica: { idClinica },
        medico: { idMedico },
      },
    });
    return solicitacoes;
  }
}
