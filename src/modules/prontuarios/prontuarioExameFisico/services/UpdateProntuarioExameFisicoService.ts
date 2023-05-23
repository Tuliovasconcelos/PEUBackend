import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioExameFisico from '../typeorm/entities/ProntuarioExameFisico';
import ProntuarioExameFisicoRepository from '../typeorm/repositories/ProntuarioExameFisicoRepository';

interface IRequest {
  idExameFisico: number;
  dataRegistro: Date;
  descricao: string;
  status: 'ativo' | 'inativo';
}

export default class UpdateProntuarioExameFisicoService {
  public async execute({
    idExameFisico,
    dataRegistro,
    descricao,
    status,
  }: IRequest): Promise<ProntuarioExameFisico> {
    const prontuarioExameFisicoRepository = getCustomRepository(ProntuarioExameFisicoRepository);
    const prontuarioExameFisico = await prontuarioExameFisicoRepository.findById(idExameFisico);

    if (!prontuarioExameFisico) {
      throw new AppError('Queixa de saúde not found.');
    }

    prontuarioExameFisico.dataRegistro = dataRegistro;
    prontuarioExameFisico.descricao = descricao;
    prontuarioExameFisico.status = status;

    await prontuarioExameFisicoRepository.save(prontuarioExameFisico);

    return prontuarioExameFisico;
  }
}
