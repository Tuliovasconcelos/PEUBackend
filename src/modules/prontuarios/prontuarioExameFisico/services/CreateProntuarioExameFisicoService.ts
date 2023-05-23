import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioExameFisico from '../typeorm/entities/ProntuarioExameFisico';
import ProntuarioExameFisicoRepository from '../typeorm/repositories/ProntuarioExameFisicoRepository';

interface IRequest {
  idProntuario: number;
  dataRegistro: Date;
  descricao: string;
  status: 'ativo' | 'inativo';
}

export default class CreateProntuarioExameFisicoService {
  public async execute({
    idProntuario,
    dataRegistro,
    descricao,
    status,
  }: IRequest): Promise<ProntuarioExameFisico> {
    const prontuarioExameFisicoRepository = getCustomRepository(ProntuarioExameFisicoRepository);

    const prontuarioExameFisico = prontuarioExameFisicoRepository.create({
      idProntuario,
      dataRegistro,
      descricao,
      status,
    });

    await prontuarioExameFisicoRepository.save(prontuarioExameFisico);

    return prontuarioExameFisico;
  }
}
