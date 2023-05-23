import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Especialidade from '../typeorm/entities/Especialidade';
import EspecialidadeRepository from '../typeorm/repositories/EspecialidadeRepository';

interface IRequest {
  idEspecialidade: number;
  nome: string;
  status: string;
}

export default class UpdateEspecialidadeService {
  public async execute({ idEspecialidade, nome, status }: IRequest): Promise<Especialidade> {
    const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

    const especialidade = await especialidadeRepository.findById(idEspecialidade);

    if (!especialidade) {
      throw new AppError('Especialidade not found');
    }

    especialidade.nome = nome;
    especialidade.status = status;

    await especialidadeRepository.save(especialidade);

    return especialidade;
  }
}

