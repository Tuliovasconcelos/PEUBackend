import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Especialidade from '../typeorm/entities/Especialidade';
import EspecialidadeRepository from '../typeorm/repositories/EspecialidadeRepository';

interface IRequest {
  id: number;
  nome: string;
  status: string;
}

export default class UpdateEspecialidadeService {
  public async execute({ id, nome, status }: IRequest): Promise<Especialidade> {
    const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

    const especialidade = await especialidadeRepository.findOne(id);

    if (!especialidade) {
      throw new AppError('Especialidade not found');
    }

    especialidade.nome = nome;
    especialidade.status = status;

    await especialidadeRepository.save(especialidade);

    return especialidade;
  }
}

