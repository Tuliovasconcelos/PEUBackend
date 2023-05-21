import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import EspecialidadeRepository from '../typeorm/repositories/EspecialidadeRepository';

interface IRequest {
  id: number;
}

export default class DeleteEspecialidadeService {
  public async execute({ id }: IRequest): Promise<void> {
    const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

    const especialidade = await especialidadeRepository.findOne(id);

    if (!especialidade) {
      throw new AppError('Especialidade not found');
    }

    await especialidadeRepository.remove(especialidade);
  }
}

