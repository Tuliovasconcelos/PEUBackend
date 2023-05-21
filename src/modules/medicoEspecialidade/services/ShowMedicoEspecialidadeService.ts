import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';

interface IRequest {
  medicoEspecialidadeId: number;
}

export default class ShowMedicoEspecialidadeService {
  public async execute({ medicoEspecialidadeId }: IRequest): Promise<MedicoEspecialidade | undefined> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = await medicoEspecialidadeRepository.findOne(medicoEspecialidadeId);

    return medicoEspecialidade;
  }
}
