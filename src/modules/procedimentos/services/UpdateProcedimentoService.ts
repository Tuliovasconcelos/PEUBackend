import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Procedimento from '../typeorm/entities/Procedimento';
import ProcedimentoRepository from '../typeorm/repositories/ProcedimentoRepository';

interface IRequest {
  idProcedimento: number;
  nome?: string;
  status?: 'ativo' | 'inativo';
}

export default class UpdateProcedimentoService {
  public async execute({ idProcedimento, nome, status }: IRequest): Promise<Procedimento> {
    const procedimentoRepository = getCustomRepository(ProcedimentoRepository);
    const procedimento = await procedimentoRepository.findById(idProcedimento);

    if (!procedimento) {
      throw new AppError('Procedimento not found');
    }

    if (nome) {
      const procedimentoExists = await procedimentoRepository.findByName(nome);

      if (procedimentoExists && procedimentoExists.idProcedimento !== idProcedimento) {
        throw new AppError('There is already a procedimento with this name');
      }

      procedimento.nome = nome;
    }

    if (status) {
      procedimento.status = status;
    }

    procedimento.dataAlteracao = new Date();

    await procedimentoRepository.save(procedimento);

    return procedimento;
  }
}
