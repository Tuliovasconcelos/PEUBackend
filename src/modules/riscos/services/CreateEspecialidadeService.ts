import { getCustomRepository } from 'typeorm';
import Especialidade from '../typeorm/entities/Especialidade';
import EspecialidadeRepository from '../typeorm/repositories/EspecialidadeRepository';

interface IRequest {
  nome: string;
  status: string;
}

export default  class CreateEspecialidadeService {
  public async execute({ nome, status }: IRequest): Promise<Especialidade> {
    const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

    const especialidade = especialidadeRepository.create({
      nome,
      status,
    });

    await especialidadeRepository.save(especialidade);

    return especialidade;
  }
}

