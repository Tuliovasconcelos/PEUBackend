import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Procedimento from '../typeorm/entities/Procedimento';
import ProcedimentoRepository from '../typeorm/repositories/ProcedimentoRepository';

interface IRequest {
  nome: string;
  status: 'A' | 'I';
}

export default class CreateProcedimentoService {
  public async execute({ nome, status }: IRequest): Promise<Procedimento> {
    const procedimentoRepository = getCustomRepository(ProcedimentoRepository);
    const procedimentoExists = await procedimentoRepository.findByName(nome);

    if (procedimentoExists) {
      throw new AppError('There is already a procedimento with this name');
    }

    const procedimento = procedimentoRepository.create({
      nome,
      status,
      dataAlteracao: new Date(),
    });

    await procedimentoRepository.save(procedimento);

    return procedimento;
  }
}
