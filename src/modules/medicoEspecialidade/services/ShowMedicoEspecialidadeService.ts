import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';

interface IRequest {
  id: number;
}

export default class ShowMedicoEspecialidadeService {
  public async execute({ id }: IRequest): Promise<MedicoEspecialidade | null> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = await medicoEspecialidadeRepository.findByMedicoAndEspecialidade(id);

    return medicoEspecialidade || null;
  }
}
