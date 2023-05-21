import { getCustomRepository } from 'typeorm';
import Especialidade from '../typeorm/entities/Especialidade';
import EspecialidadeRepository from '../typeorm/repositories/EspecialidadeRepository';

export default class ListEspecialidadeService {
  public async execute(): Promise<Especialidade[]> {
    const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

    const especialidades = await especialidadeRepository.find();

    return especialidades;
  }
}

