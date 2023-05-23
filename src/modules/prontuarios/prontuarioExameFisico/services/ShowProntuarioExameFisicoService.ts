import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioExameFisico from '../typeorm/entities/ProntuarioExameFisico';
import ProntuarioExameFisicoRepository from '../typeorm/repositories/ProntuarioExameFisicoRepository';

interface IRequest {
  idExameFisico: number;
}

export default class ShowProntuarioExameFisicoService {
  public async execute({ idExameFisico }: IRequest): Promise<ProntuarioExameFisico> {
    const prontuarioExameFisicoRepository = getCustomRepository(ProntuarioExameFisicoRepository);
    const prontuarioExameFisico = await prontuarioExameFisicoRepository.findById(idExameFisico);

    if (!prontuarioExameFisico) {
      throw new AppError('Queixa de saúde not found.');
    }

    return prontuarioExameFisico;
  }
}
