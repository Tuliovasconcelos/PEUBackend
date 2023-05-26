import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Programa from '../typeorm/entities/Programa';
import ProgramaRepository from '../typeorm/repositories/ProgramaRepository';

interface IRequest {
  descricao: string;
  status: 'A' | 'I';
}

export default class CreateProgramaService {
  public async execute({ descricao, status }: IRequest): Promise<Programa> {
    const programaRepository = getCustomRepository(ProgramaRepository);
    const programaExists = await programaRepository.findByDescricao(descricao);

    if (programaExists) {
      throw new AppError('There is already a program with this description');
    }

    const programa = programaRepository.create({
      descricao,
      status,
      dataAlteracao: new Date(),
    });

    await programaRepository.save(programa);

    return programa;
  }
}
