import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import EspecialidadeRepository from '../typeorm/repositories/EspecialidadeRepository';

interface IRequest {
  idEspecialidade: number;
}

export default class DeleteEspecialidadeService {
  public async execute({ idEspecialidade }: IRequest): Promise<void> {
    const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

    const especialidade = await especialidadeRepository.findById(idEspecialidade);

    if (!especialidade) {
      throw new AppError('Especialidade not found');
    }

    await especialidadeRepository.remove(especialidade);
  }
}
