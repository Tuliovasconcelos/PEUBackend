import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Procedimento from '../typeorm/entities/Procedimento';
import ProcedimentoRepository from '../typeorm/repositories/ProcedimentoRepository';

interface IRequest {
  idProcedimento: number;
}

export default class DeleteProcedimentoService {
  public async execute({ idProcedimento }: IRequest): Promise<void> {
    const procedimentoRepository = getCustomRepository(ProcedimentoRepository);
    const procedimento = await procedimentoRepository.findById(idProcedimento);

    if (!procedimento) {
      throw new AppError('Procedimento not found');
    }

    await procedimentoRepository.remove(procedimento);
  }
}
