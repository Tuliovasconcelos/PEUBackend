import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Especialidade from '../typeorm/entities/Especialidade';
import EspecialidadeRepository from '../typeorm/repositories/EspecialidadeRepository';

interface IRequest {
  id: number;
}

export default class ShowEspecialidadeService {
  public async execute({ id }: IRequest): Promise<Especialidade> {
    const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

    const especialidade = await especialidadeRepository.findOne(id);

    if (!especialidade) {
      throw new AppError('Especialidade not found');
    }

    return especialidade;
  }
}

