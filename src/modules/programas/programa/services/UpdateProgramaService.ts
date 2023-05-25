import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Programa from '../typeorm/entities/Programa';
import ProgramaRepository from '../typeorm/repositories/ProgramaRepository';

interface IRequest {
  idPrograma: number;
  descricao?: string;
  status?: 'ativo' | 'inativo';
}

export default class UpdateProgramaService {
  public async execute({ idPrograma, descricao, status }: IRequest): Promise<Programa> {
    const programaRepository = getCustomRepository(ProgramaRepository);
    const programa = await programaRepository.findById(idPrograma);

    if (!programa) {
      throw new AppError('Program not found');
    }

    if (descricao) {
      programa.descricao = descricao;
    }

    if (status) {
      programa.status = status;
    }

    programa.dataAlteracao = new Date();

    await programaRepository.save(programa);

    return programa;
  }
}
