import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioExameFisicoRepository from '../typeorm/repositories/ProntuarioExameFisicoRepository';

interface IRequest {
  idExameFisico: number;
}

export default class DeleteProntuarioExameFisicoService {
  public async execute({ idExameFisico }: IRequest): Promise<void> {
    const prontuarioExameFisicoRepository = getCustomRepository(ProntuarioExameFisicoRepository);
    const prontuarioExameFisico = await prontuarioExameFisicoRepository.findById(idExameFisico);

    if (!prontuarioExameFisico) {
      throw new AppError('Queixa de saúde not found.');
    }

    await prontuarioExameFisicoRepository.remove(prontuarioExameFisico);
  }
}
