import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Especialidade from '../typeorm/entities/Especialidade';
import EspecialidadeRepository from '../typeorm/repositories/EspecialidadeRepository';

interface IRequest {
  idEspecialidade: number;
}

export default class ShowEspecialidadeService {
  public async execute({ idEspecialidade }: IRequest): Promise<Especialidade> {
    const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

    const especialidade = await especialidadeRepository.findById(idEspecialidade);

    if (!especialidade) {
      throw new AppError('Especialidade not found');
    }

    return especialidade;
  }
}

